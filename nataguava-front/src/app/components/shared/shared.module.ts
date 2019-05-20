import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';
import { AlertModule } from './alert/alert.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CardVagaComponent } from './../../components/shared/card-vaga/card-vaga.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardVagasComponent } from './card-vagas/card-vagas.component';
import { CardHistoryJobsComponent } from './card-history-jobs/card-history-jobs.component';

@NgModule({
    declarations: [
       CardVagaComponent,
       CardVagasComponent,
       CardHistoryJobsComponent,
       MinuteSecondsPipe
    ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule
    ],
    exports: [
        CardVagaComponent,
        CardVagasComponent,
        CardHistoryJobsComponent,
        AlertModule,
        MinuteSecondsPipe
    ]
})
export class SharedModule {

}