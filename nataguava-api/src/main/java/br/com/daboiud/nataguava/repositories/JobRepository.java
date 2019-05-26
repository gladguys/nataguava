package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.JobStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long>, JobRepositoryCustom {

    List<Job> findByUserCompanyIdAndStatus(Long companyId, JobStatus jobStatus);
    List<Job> findAllByStatus(JobStatus jobStatus);
    List<Job> findByUserCompanyId(Long companyId);

    @Query("select j from Job j where j.title like CONCAT('%', ?1,'%') and j.location like CONCAT('%',?2,'%') and j.status = 'CREATED'")
    List<Job> findAllByFilters(String content, String place);

}
