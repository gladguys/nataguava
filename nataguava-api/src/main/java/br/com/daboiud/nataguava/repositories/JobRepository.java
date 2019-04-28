package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.JobStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByUserCompanyIdAndStatus(Long companyId, JobStatus jobStatus);
    List<Job> findAllByStatus(JobStatus jobStatus);

}
