import { SharedService } from './../../../services/shared.service';
import { JobService } from './../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: Array<Job> = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.findAll().subscribe( jobs => {
      this.jobs = jobs;
    });
  }

}
