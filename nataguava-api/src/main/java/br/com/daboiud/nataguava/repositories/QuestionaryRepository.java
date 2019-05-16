package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Questionary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionaryRepository extends JpaRepository<Questionary, Long> {

    @Query("select count(q) from Questionary q where q.candidate.id = ?1 and q.job.id = ?2")
    public int hasTaken(Long candidateId, Long jobId);
}
