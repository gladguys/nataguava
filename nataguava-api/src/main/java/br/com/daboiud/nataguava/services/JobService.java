package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.ResultCandidateJob;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public interface JobService {

    Job createOrUpdate(Job job);
    List<Job> findAll();
    Optional<Job> findById(Long id);
    List<Job> findAllByCompanyIdAndStatus(Long companyId);
    List<Job> findAllByCompanyId(Long companyId);
    List<Job> findAllActive();

    List<Job> findAllByFilter(String content, String place);

    int qntJobsByCandidate(Long candidateId);

    void cancelJobForCandidate(Long jobId, Long id);
}
