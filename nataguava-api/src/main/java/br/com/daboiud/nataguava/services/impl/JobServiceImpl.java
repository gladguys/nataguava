package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Content;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.JobStatus;
import br.com.daboiud.nataguava.models.dtos.JobDTO;
import br.com.daboiud.nataguava.repositories.JobRepository;
import br.com.daboiud.nataguava.services.JobService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

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

    public List<Job> findAllActive() {
        return this.jobRepository.findAllByStatus(JobStatus.CREATED);
    }

    @Override
    public List<Job> findAllByFilter(String content, String place) {
        return jobRepository.findAllByFilters(content,place);
    }

    @Override
    public Optional<Job> findById(Long id) {
        return this.jobRepository.findById(id);
    }

    @Override
    public List<Job> findAllByCompanyIdAndStatus(Long companyId) {
        return this.jobRepository.findByUserCompanyIdAndStatus(companyId, JobStatus.CREATED);
    }

    @Override
    public List<Job> findAllByCompanyId(Long companyId) {
        return this.jobRepository.findByUserCompanyId(companyId);
    }

	@Override
	public List<JobDTO> findAllByTags(List<Content> contents) {
		return this.jobRepository.findAllByTags(contents);
	}

}
