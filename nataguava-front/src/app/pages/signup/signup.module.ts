import { SignupCandidateComponent } from './signup-candidate/signup-candidate.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserService } from 'src/app/services/user.service';

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
