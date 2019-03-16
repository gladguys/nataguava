package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.services.JobService;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/api/jobs")
public class JobController {


    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
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

    @GetMapping(value = "/company/{companyId}")
    public ResponseEntity<List<Job>> getJobsByCompany(Long companyId) {
        List<Job> jobs;
        try {
            jobs = this.jobService.findAllByCompanyId(companyId);
            return ResponseEntity.ok(jobs);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
