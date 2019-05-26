package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Questionary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface QuestionaryRepository extends JpaRepository<Questionary, Long> {

    @Query("select count(q) from Questionary q where q.candidate.id = ?1 and q.job.id = ?2")
    int hasTaken(Long candidateId, Long jobId);

    @Transactional
    @Modifying
    @Query("delete from Questionary q where q.candidate.id = ?1 and q.job.id = ?2")
    int deleteQuestionary(Long candidateId, Long jobId);
}
