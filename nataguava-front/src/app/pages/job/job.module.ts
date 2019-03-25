import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormJobComponent } from "./form-job/form-job.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormJobComponent
    ],imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormJobComponent
    ]
})
export class JobModule {

}