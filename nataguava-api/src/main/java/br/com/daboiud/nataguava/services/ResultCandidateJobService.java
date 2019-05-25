package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;

import java.util.List;

public interface ResultCandidateJobService {

    ResultCandidateJob createOrUpdate(ResultCandidateJob resultCandidateJob);

    List<ResultCandidateJobDto> findByJobId(Long jobId);

}
