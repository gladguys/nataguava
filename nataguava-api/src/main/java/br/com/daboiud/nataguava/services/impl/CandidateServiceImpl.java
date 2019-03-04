package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.repositories.CandidateRepository;
import br.com.daboiud.nataguava.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Override
    public Candidate createOrUpdate(Candidate candidate) {
        return this.candidateRepository.save(candidate);
    }

    @Override
    public List<Candidate> findAll() {
        return this.candidateRepository.findAll();
    }
}
