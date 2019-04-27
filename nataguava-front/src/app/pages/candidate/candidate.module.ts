import { HomeCandidadeComponent } from './home-candidate/home-candidate.component';
import { SharedModule } from './../../components/shared/shared.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HomeCandidadeComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        HomeCandidadeComponent
    ]
})
export class CandidateModule {

}