package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.Candidate;

import java.util.List;

public interface CandidateService {

    Candidate createOrUpdate(Candidate candidate);
    List<Candidate> findAll();
}
