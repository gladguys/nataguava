import { JobService } from './../../../services/job.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home-candidate.component.html',
  styleUrls: ['./home-candidate.component.css']
})
export class HomeCandidadeComponent implements OnInit {


  jobs: Array<Job> = [];

  constructor(private jobService: JobService,
              private sharedService: SharedService,
              public router: Router) { }

  ngOnInit() {
    console.log(this.sharedService.getUserLogged());
    this.jobService.findAllByCandidadeId(this.sharedService.getUserLogged().id)
                    .subscribe( jobs => this.jobs = jobs);

  }

  goToDetail(job:Job) {
    this.router.navigate([`/job-detail/${job.id}`]);  
  }

}
