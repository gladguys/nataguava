package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.ProfileEnum;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping(value = "/api/candidates")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

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
}
