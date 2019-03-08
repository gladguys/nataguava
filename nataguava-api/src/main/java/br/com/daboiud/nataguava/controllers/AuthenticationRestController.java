package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.*;
import br.com.daboiud.nataguava.security.jwt.JwtAuthenticationRequest;
import br.com.daboiud.nataguava.security.jwt.JwtTokenUtil;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.UserCompanyService;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class AuthenticationRestController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Qualifier("jwtService")
	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private UserService userService;

	@Autowired
	private UserCompanyService userCompanyService;

	@Autowired
	private CandidateService candidateService;

	@PostMapping(value = "/api/auth")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest) throws Exception {
		final Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						authenticationRequest.getEmail(),
						authenticationRequest.getPassword()
				)
		);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());
		final String token = jwtTokenUtil.generateToken(userDetails);
		final User user = userService.findByEmail(authenticationRequest.getEmail());
		user.setPassword(null);

		if(user.getProfileEnum().equals(ProfileEnum.ROLE_RECRUTER)){
			UserCompany userCompany = userCompanyService.findByUserId(user.getId());
			return ResponseEntity.ok(new CurrentUserRecruter(token, userCompany));
		} else if(user.getProfileEnum().equals(ProfileEnum.ROLE_CANDIDATE)) {
			Candidate candidate = candidateService.findByUserId(user.getId());
			return ResponseEntity.ok(new CurrentUserCandidate(token, candidate));
		}
			return ResponseEntity.ok(new CurrentUserAdmin(token, user));
	}
}
