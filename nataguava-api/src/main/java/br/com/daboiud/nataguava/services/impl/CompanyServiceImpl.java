package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Company;
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
	public Company createOrUpdate(Company company) {
		return this.companyRepository.save(company);
	}

	@Override
	public List<Company> findAll() {
		return this.companyRepository.findAll();
	}
}
