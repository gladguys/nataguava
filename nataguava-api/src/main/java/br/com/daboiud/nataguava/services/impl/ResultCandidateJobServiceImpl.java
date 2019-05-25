package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;
import br.com.daboiud.nataguava.repositories.ResultCandidateJobRepository;
import br.com.daboiud.nataguava.services.ResultCandidateJobService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResultCandidateJobServiceImpl implements ResultCandidateJobService {

    ResultCandidateJobRepository repository;
    public ResultCandidateJobServiceImpl(ResultCandidateJobRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public ResultCandidateJob createOrUpdate(ResultCandidateJob resultCandidateJob) {
        return this.repository.save(resultCandidateJob);
    }

    public List<ResultCandidateJobDto> findByJobId(Long jobId) {
        return this.repository.findByJobId(jobId).stream().map(ResultCandidateJob::toDTO).collect(Collectors.toList());
    }
}
