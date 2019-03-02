package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.UserCompany;
import br.com.daboiud.nataguava.repositories.CompanyRepository;
import br.com.daboiud.nataguava.services.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

	private CompanyRepository companyRepository;

	public CompanyServiceImpl(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	@Override
	public UserCompany createOrUpdate(UserCompany userCompany) {
		return this.companyRepository.save(userCompany);
	}

	@Override
	public List<UserCompany> findAll() {
		return this.companyRepository.findAll();
	}
}
