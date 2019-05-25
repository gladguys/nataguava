import { Component, Input } from "@angular/core";
import { ResultCandidateJob } from "src/app/models/result-candidate-job.model";

@Component({
    selector: 'guava-job-ranking',
    templateUrl: './job-ranking.component.html',
    styleUrls: ['job-ranking.component.css']
})
export class JobRankingComponent {

    @Input() resultCandidates: ResultCandidateJob[];
    @Input() numberOfBestCandidates: number;
    constructor() {}
}