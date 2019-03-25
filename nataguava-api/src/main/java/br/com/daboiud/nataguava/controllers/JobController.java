package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.UserCompany;
import br.com.daboiud.nataguava.services.JobService;
import br.com.daboiud.nataguava.services.UserCompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/jobs")
public class JobController {


    private JobService jobService;
    private UserCompanyService userCompanyService;

    public JobController(JobService jobService, UserCompanyService userCompanyService) {
        this.jobService = jobService;
        this.userCompanyService = userCompanyService;
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
}
