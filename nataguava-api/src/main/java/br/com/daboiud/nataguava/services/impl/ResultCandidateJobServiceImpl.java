package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.repositories.ResultCandidateJobRepository;
import br.com.daboiud.nataguava.services.ResultCandidateJobService;
import org.springframework.stereotype.Service;

@Service
public class ResultCandidateJobServiceImpl implements ResultCandidateJobService {

    ResultCandidateJobRepository repository;

    public ResultCandidateJobServiceImpl(ResultCandidateJobRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResultCandidateJob createOrUpdate(ResultCandidateJob resultCandidateJob) {
        return this.repository.save(resultCandidateJob);
    }
}
