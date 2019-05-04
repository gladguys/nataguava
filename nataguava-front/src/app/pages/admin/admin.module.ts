import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        QuestionFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbTypeaheadModule
    ],
    exports: [
        QuestionFormComponent
    ]
})
export class AdminModule {

}