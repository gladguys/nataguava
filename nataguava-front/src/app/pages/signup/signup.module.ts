import { SignupCandidateComponent } from './signup-candidate/signup-candidate.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [SignupCandidateComponent],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SignupModule {

}
