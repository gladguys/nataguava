package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.ProfileEnum;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.JobService;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping(value = "/api/candidates")
public class CandidateController {

    private CandidateService candidateService;
    private JobService jobService;

    public CandidateController(CandidateService candidateService, JobService jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody Candidate candidate) {
        User userCandidate;
        try {

            userCandidate = this.candidateService.createOrUpdate(candidate);
            return ResponseEntity.ok(userCandidate);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/{userId}/jobs")
    public ResponseEntity<Set<Job>> getJobsByCandidate(@PathVariable("userId") Long userId) {
        try {
            Candidate candidate = this.candidateService.findByUserId(userId);
            return ResponseEntity.ok(candidate.getJobs());
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Candidate> getById(@PathVariable("id") Long id) {
        try {
            Candidate candidate = this.candidateService.findById(id);
            return ResponseEntity.ok(candidate);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/user/{userId}")
    public ResponseEntity<Candidate> getUserCompanyByUser(@PathVariable("userId") Long userId) {
        try {
            Candidate userCompany = this.candidateService.findByUserId(userId);return ResponseEntity.ok(userCompany);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/{userId}/number-jobs")
    public ResponseEntity<Boolean> hasAlreadyTwoJobs(@PathVariable("userId") Long userId) {
        try {
            Candidate userCompany = this.candidateService.findByUserId(userId);
            int qnt = this.jobService.qntJobsByCandidate(userCompany.getId());
            if(qnt >= 2)
                return ResponseEntity.ok(true);
            else
                return ResponseEntity.ok(false);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
