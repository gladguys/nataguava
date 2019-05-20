import { JobService } from './../../../services/job.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  templateUrl: './home-candidate.component.html',
  styleUrls: ['./home-candidate.component.css']
})
export class HomeCandidadeComponent implements OnInit {


  jobsAndamento: Array<Job> = [];
  closedJobs: Array<Job> = [];


  constructor(private jobService: JobService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.jobService.findAllByCandidadeId(this.sharedService.getUserLogged().id)
      .subscribe(jobs => {
        jobs.forEach((j: Job) => {
          if (j.status == "CLOSED") {
            this.closedJobs.push(j);
          } else if (j.status == "CREATED") {
            this.jobsAndamento.push(j);
          }
        })
      }
      );
  }
}
