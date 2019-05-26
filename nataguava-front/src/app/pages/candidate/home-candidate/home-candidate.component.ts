import { JobService } from './../../../services/job.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { AlertService } from 'src/app/components/shared/alert/alert.service';

@Component({
  templateUrl: './home-candidate.component.html',
  styleUrls: ['./home-candidate.component.css']
})
export class HomeCandidadeComponent implements OnInit {


  jobsAndamento: Array<Job> = [];
  job1: Job;
  job2: Job;
  closedJobs: Array<Job> = [];


  constructor(private jobService: JobService,
    private sharedService: SharedService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loadMyJobs();
  }

  loadMyJobs() {
    this.jobService.findAllByCandidadeId(this.sharedService.getUserLogged().id)
      .subscribe(jobs => {
        this.job1 = jobs[0];
        this.job2 = jobs[1];

        console.log(this.job1);
        console.log(this.job2);
      });
  }

  cancelarInscricao(job: Job) {
    this.jobService.cancelSubscriptionCandidate(job.id, this.sharedService.getUserLogged().id).subscribe( (res) => {
      this.loadMyJobs();
    }, () => {
      this.loadMyJobs();
    })
  }
}
