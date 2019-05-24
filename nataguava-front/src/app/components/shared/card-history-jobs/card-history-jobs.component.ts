import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'guava-card-history',
  templateUrl: './card-history-jobs.component.html',
  styleUrls: ['./card-history-jobs.component.css']
})
export class CardHistoryJobsComponent implements OnInit {

  @Input() jobs: Job[];
  @Input() isCompany: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(job:Job) {
    this.router.navigate([`/job-detail/${job.id}`]);  
  }
}
