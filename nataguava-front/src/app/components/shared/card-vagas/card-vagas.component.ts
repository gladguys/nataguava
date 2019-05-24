import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'guava-card-vagas',
    templateUrl: './card-vagas.component.html',
    styleUrls: ['card-vagas.component.css']
})
export class CardVagasComponent {

    constructor(private router: Router){}

    @Input() jobs: Job[];
    @Input() titleCard: string;

    goToDetail(job: Job) {
        this.router.navigate([`/job-detail/${job.id}`]);
      }
}