package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByUserCompanyId(Long companyId);
}
