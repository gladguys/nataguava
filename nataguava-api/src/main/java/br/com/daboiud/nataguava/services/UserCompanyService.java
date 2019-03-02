package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.UserCompany;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserCompanyService {

	UserCompany createOrUpdate(UserCompany userCompany);
	List<UserCompany> findAll();
}
