import { AlertService } from './../../../components/shared/alert/alert.service';
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

  constructor(public route: ActivatedRoute,
    public router: Router,
    public sharedService: SharedService,
    public alertService: AlertService,
    public jobService: JobService) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    if (jobId) {
      this.jobService
        .findById(jobId)
        .subscribe((job) => { this.job = job; console.log(this.job) });
    }
  }

  isCandidate() {
    if (!this.sharedService.getUserLogged()) return true;
    return this.sharedService.getUserLogged().profileEnum == "ROLE_CANDIDATE";
  }

  addUser() {
    if (this.sharedService.getUserLogged()) {
      this.jobService.addCandidate(this.sharedService.getUserLogged().id, this.job.id).subscribe(job => {
        this.alertService.success("salvo com sucesso");
      }, err => {
        this.alertService.danger("erro ao salvar");
      })
    } else {
      this.router.navigateByUrl("/login");
    }
  }
}
