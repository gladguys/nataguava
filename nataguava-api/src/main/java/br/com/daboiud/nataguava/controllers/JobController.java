package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.UserCompany;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.JobService;
import br.com.daboiud.nataguava.services.UserCompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/api/jobs")
public class JobController {


    private JobService jobService;
    private UserCompanyService userCompanyService;
    private CandidateService candidateService;

    public JobController(JobService jobService, UserCompanyService userCompanyService, CandidateService candidateService) {
        this.jobService = jobService;
        this.userCompanyService = userCompanyService;
        this.candidateService = candidateService;
    }

    @PostMapping
    public ResponseEntity<Job> save(@RequestBody Job job) {
        Job savedJob;
        try {
            savedJob = this.jobService.createOrUpdate(job);
            return ResponseEntity.ok(savedJob);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/{jobId}/add-candidate/{userId}")
    public ResponseEntity<Job> registerCandidateToJob(@PathVariable("jobId") Long jobId, @PathVariable("userId") Long userId) throws Throwable {
        try {
            Candidate candidade = this.candidateService.findByUserId(userId);
            Job job = this.jobService.findById(jobId).orElseThrow(Exception::new);
            job.addCandidate(candidade);
            this.jobService.createOrUpdate(job);
            return ResponseEntity.ok(job);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping(value = "/company/{userId}")
    public ResponseEntity<List<Job>> getJobsByCompany(@PathVariable("userId") Long userId) {
        List<Job> jobs;
        try {
            UserCompany userCompany = this.userCompanyService.findByUserId(userId);
            jobs = this.jobService.findAllByCompanyId(userCompany.getId());
            return ResponseEntity.ok(jobs);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/candidate/{userId}")
    public ResponseEntity<Set<Job>> getJobsByCandidate(@PathVariable("userId") Long userId) {
        try {
            Candidate candidate = this.candidateService.findByUserId(userId);
            return ResponseEntity.ok(candidate.getJobs());
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/home")
    public ResponseEntity<List<Job>> getJobsAvaliable() {
        List<Job> jobs;
        try {
            jobs = this.jobService.findAll();
            return ResponseEntity.ok(jobs);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getById(@PathVariable("id") Long id) throws Throwable {
           return ResponseEntity.ok(this.jobService.findById(id).orElseThrow(Exception::new));
    }
}
