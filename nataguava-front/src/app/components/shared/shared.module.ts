import { CardVagaComponent } from './../../components/shared/card-vaga/card-vaga.component';
import { ListCardVagaComponent } from './list-card-vaga/list-card-vaga.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
       CardVagaComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule
    ],
    exports: [
        CardVagaComponent,
        ListCardVagaComponent
    ]
})
export class SharedModule {

}