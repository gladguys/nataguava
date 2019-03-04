package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.Candidate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CandidateService {

    Candidate createOrUpdate(Candidate candidate);
    List<Candidate> findAll();
}
