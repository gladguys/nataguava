package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {

}
