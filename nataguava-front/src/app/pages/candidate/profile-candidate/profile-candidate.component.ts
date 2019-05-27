import { CandidateService } from './../../../services/candidate.service';
import { Component, Input, AfterContentInit } from "@angular/core";
import { Candidate } from "src/app/models/candidate.model";

@Component({
    selector: 'guava-profile-candidate',
    templateUrl: './profile-candidate.component.html',
    styleUrls: ['./profile-candidate.component.css']
})
export class ProfileCandidateComponent implements AfterContentInit {
   
    ngAfterContentInit(): void {
        this.candidateService.findById(this.candidateId).subscribe( c => {this.candidate = c; console.log(c)} );
    }

    @Input() candidateId: number;
    candidate: Candidate;

    constructor(private candidateService: CandidateService) {
    }
}   