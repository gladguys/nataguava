import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormJobComponent } from "./form-job/form-job.component";

@NgModule({
    declarations: [
        CommonModule,
        FormJobComponent
    ],
    exports: [
        FormJobComponent
    ]
})
export class JobModule {

}