import { SharedService } from './../../../services/shared.service';
import { JobService } from './../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: Array<Job> = [];

  constructor(private jobService: JobService,
              public router: Router) { }

  ngOnInit() {
    this.jobService.findAll().subscribe( jobs => {
      this.jobs = jobs;
      console.log("")
    });
  }

  goToDetail(job:Job) {
    this.router.navigate([`/job-detail/${job.id}`]);  
  }
}
