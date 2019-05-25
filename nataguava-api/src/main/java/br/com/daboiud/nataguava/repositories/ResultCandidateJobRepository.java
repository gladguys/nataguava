package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResultCandidateJobRepository extends JpaRepository<ResultCandidateJob, Long>, ResultCandidateJobRepositoryCustom {

    @Query("select r from ResultCandidateJob r where r.job.id  = ?1")
    List<ResultCandidateJob> findByJobId(Long jobId);
}
