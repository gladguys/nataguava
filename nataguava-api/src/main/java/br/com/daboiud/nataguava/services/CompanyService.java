package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.Company;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CompanyService {

	Company createOrUpdate(Company company);
	List<Company> findAll();
}
