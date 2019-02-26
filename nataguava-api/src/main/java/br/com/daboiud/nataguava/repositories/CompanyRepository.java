package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, String> {
}

