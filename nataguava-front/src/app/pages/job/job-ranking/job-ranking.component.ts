import { Candidate } from 'src/app/models/candidate.model';
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { ResultCandidateJob } from "src/app/models/result-candidate-job.model";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'guava-job-ranking',
    templateUrl: './job-ranking.component.html',
    styleUrls: ['job-ranking.component.css']
})
export class JobRankingComponent {

    @ViewChild("content") content: ElementRef;
    @Input() resultCandidates: ResultCandidateJob[];
    @Input() numberOfBestCandidates: number;
    
    constructor(private router: Router, 
                private modalService: NgbModal) {}

    detailJob(candidate: Candidate) {
        this.modalService.open(this.content, { centered: true });
    }
}