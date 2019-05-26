package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;
import br.com.daboiud.nataguava.repositories.JobRepository;
import br.com.daboiud.nataguava.repositories.ResultCandidateJobRepository;
import br.com.daboiud.nataguava.services.ResultCandidateJobService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResultCandidateJobServiceImpl implements ResultCandidateJobService {

    ResultCandidateJobRepository repository;
    JobRepository jobRepository;

    public ResultCandidateJobServiceImpl(ResultCandidateJobRepository repository, JobRepository jobRepository) {

        this.repository = repository;
        this.jobRepository = jobRepository;
    }

    @Override
    @Transactional
    public ResultCandidateJobDto createOrUpdate(ResultCandidateJob resultCandidateJob) throws Exception {
        ResultCandidateJob result = this.repository.save(resultCandidateJob);
        Job job = this.jobRepository.findById(result.getJob().getId()).orElseThrow(Exception::new);
        result.setJob(job);
        return result.toDTO();
    }

    public List<ResultCandidateJobDto> findByJobId(Long jobId) throws Exception {
        return this.repository.findByJobId(jobId).stream().map(ResultCandidateJob::toDTO).collect(Collectors.toList());
    }
}
