package br.com.daboiud.nataguava.security.jwt;

import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Qualifier("jwtService")
public class JwtUserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		User user = userService.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException(String.format("NO user found."));
		} else {
			return JwtUserFactory.create(user);
		}

	}
}
