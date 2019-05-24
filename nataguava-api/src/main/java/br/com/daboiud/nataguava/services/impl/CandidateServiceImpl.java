package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.ProfileEnum;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.repositories.CandidateRepository;
import br.com.daboiud.nataguava.repositories.UserRepository;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JobService jobService;

    @Override
    public User createOrUpdate(Candidate candidate) {
        candidate.getUser().setProfileEnum(ProfileEnum.ROLE_CANDIDATE);
        candidate.getUser().setPassword(passwordEncoder.encode(candidate.getUser().getPassword()));
        User userCandidate = this.userRepository.save(candidate.getUser());
        this.candidateRepository.save(candidate);
        return userCandidate;
    }

    @Override
    public List<Candidate> findAll() {
        return this.candidateRepository.findAll();
    }

    @Override
    public Candidate findByUserId(Long id) {
        return this.candidateRepository.findByUserId(id);
    }

    @Override
    public Job registerJob(Long userId, Long jobId) throws Exception {
        Candidate candidade = this.findByUserId(userId);
        Job job = this.jobService.findById(jobId).orElseThrow(Exception::new);
        job.addCandidate(candidade);
        return this.jobService.createOrUpdate(job);
    }
}
