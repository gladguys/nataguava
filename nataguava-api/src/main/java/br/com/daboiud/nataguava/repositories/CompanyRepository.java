package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.UserCompany;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<UserCompany, String> {

    UserCompany findByUserId(Long id);
}

