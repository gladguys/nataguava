import { CardVagaComponent } from './../../components/shared/card-vaga/card-vaga.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
       CardVagaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardVagaComponent
    ]
})
export class SharedModule {

}