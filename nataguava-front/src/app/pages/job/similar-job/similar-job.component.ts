import { OnInit, Component, Input } from "@angular/core";
import { JobService } from "src/app/services/job.service";
import { Job } from "src/app/models/job.model";

@Component({
  selector: 'similar-jobs',
  templateUrl: './similar-job.component.html'
})
export class SimilarJobComponent implements OnInit {

    @Input() job: Job;
    public jobs: Job[];

    constructor(public jobService: JobService) { }

    ngOnInit() {
        this.jobService.findAllByTags(this.job.contents)
        .subscribe(jobs => this.jobs = jobs);
    }
}
