import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SharedModule as mySharedModule } from './../../../components/shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        mySharedModule,
        CardModule,
        ButtonModule
    ],
    exports: [
        HomeComponent
    ]

})
export class HomeModule {

}