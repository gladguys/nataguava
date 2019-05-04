import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        QuestionFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        QuestionFormComponent
    ]
})
export class AdminModule {

}