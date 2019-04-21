import { SharedService } from 'src/app/services/shared.service';
import { Job } from './../../../models/job.model';
import { JobService } from './../../../services/job.service';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {

  public job: Job = new Job();

  public fakecontents = [
    "JAVA", "JAVASCRIPT", "SQL", "SPRING MVC"
  ]

  constructor(public route: ActivatedRoute, 
              public router: Router,
              public sharedService: SharedService,
              public jobService: JobService) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    if(jobId) {
      this.jobService.findById(jobId).subscribe( (job:Job) => this.job = job);
    }
  }

  isCandidate() {
    return this.sharedService.getUserLogged().profileEnum == "ROLE_CANDIDATE";
  }

}
