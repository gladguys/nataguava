package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.repositories.JobRepository;
import br.com.daboiud.nataguava.services.JobService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
@Primary
@Qualifier("nome")
public class JobServiceImpl implements JobService {

    private JobRepository jobRepository;

    public JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public Job createOrUpdate(Job job) {
        return this.jobRepository.save(job);
    }

    @Override
    public List<Job> findAll() {
        return this.jobRepository.findAll();
    }

    @Override
    public Optional<Job> findById(Long id) {
        return this.jobRepository.findById(id);
    }

    @Override
    public List<Job> findAllByCompanyId(Long companyId) {
        return this.jobRepository.findByUserCompanyId(companyId);
    }
}
