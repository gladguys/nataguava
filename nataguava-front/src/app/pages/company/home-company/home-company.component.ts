import { JobService } from './../../../services/job.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {


  jobs: Array<Job> = [];

  constructor(private jobService: JobService,
              private sharedService: SharedService) { }

  ngOnInit() {
    console.log(this.sharedService.getUserLogged());
    this.jobService.findAllByUserCompanyId(this.sharedService.getUserLogged().id).subscribe(
      jobs => this.jobs = jobs
    );    
  }

}
