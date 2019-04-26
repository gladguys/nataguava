import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormJobComponent } from "./form-job/form-job.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailJobComponent } from './detail-job/detail-job.component';
import { RouterModule } from '@angular/router';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        FormJobComponent,
        DetailJobComponent
    ],imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbTypeaheadModule
    ],
    exports: [
        FormJobComponent,
        DetailJobComponent
    ]
})
export class JobModule {

}