import { ShowIfCandidateComponent } from './show-if-candidate.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule(
    {
        imports:[CommonModule],
        declarations: [ShowIfCandidateComponent],
        exports: [ShowIfCandidateComponent]
    }
)
export class ShowIfCandidateModule {

}