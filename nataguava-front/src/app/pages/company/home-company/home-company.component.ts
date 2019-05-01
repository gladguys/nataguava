import { JobService } from './../../../services/job.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {


  jobsAndamento: Array<Job> = [];
  jobsHistorico: Array<Job> = [];

  constructor(private jobService: JobService,
              private sharedService: SharedService,
              public router: Router) { }

  ngOnInit() {
    this.jobService.findAllByUserCompanyId(this.sharedService.getUserLogged().id).subscribe(
      jobs => {
        jobs.forEach((j: Job) => {
          if(j.status == "CLOSED") {
            this.jobsHistorico.push(j);
          } else if(j.status == "CREATED") {
            this.jobsAndamento.push(j);
          }
        })
      }
    );    
    
  }

  goToDetail(job:Job) {
    this.router.navigate([`/job-detail/${job.id}`]);  
  }

}
