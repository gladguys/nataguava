package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;

import java.util.List;

public interface ResultCandidateJobService {

    ResultCandidateJobDto createOrUpdate(ResultCandidateJob resultCandidateJob) throws Exception;

    List<ResultCandidateJobDto> findByJobId(Long jobId) throws Exception;

}
