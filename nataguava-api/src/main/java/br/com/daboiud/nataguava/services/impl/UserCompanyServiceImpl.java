package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.ProfileEnum;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.models.UserCompany;
import br.com.daboiud.nataguava.repositories.CompanyRepository;
import br.com.daboiud.nataguava.repositories.UserRepository;
import br.com.daboiud.nataguava.services.UserCompanyService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCompanyServiceImpl implements UserCompanyService {

	private CompanyRepository companyRepository;
	private PasswordEncoder passwordEncoder;
	private UserRepository userRepository;

	public UserCompanyServiceImpl(CompanyRepository companyRepository, PasswordEncoder passwordEncoder, UserRepository userRepository) {
		this.companyRepository = companyRepository;
		this.passwordEncoder = passwordEncoder;
		this.userRepository = userRepository;
	}

	@Override
	public User createOrUpdate(UserCompany userCompany) {
		userCompany.getUser().setProfileEnum(ProfileEnum.ROLE_RECRUTER);
		userCompany.getUser().setPassword(passwordEncoder.encode(userCompany.getUser().getPassword()));
		User user = this.userRepository.save(userCompany.getUser());
		this.companyRepository.save(userCompany);
		return user;
	}

	@Override
	public List<UserCompany> findAll() {
		return this.companyRepository.findAll();
	}

	@Override
	public UserCompany findByUserId(Long id) {
		return this.companyRepository.findByUserId(id);
	}
}
