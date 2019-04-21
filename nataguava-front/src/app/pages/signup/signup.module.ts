import { SignupCandidateComponent } from './signup-candidate/signup-candidate.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignupCompanyComponent } from './signup-company/signup-company.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SignupCandidateComponent,
        SignupCompanyComponent
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class SignupModule {

}
