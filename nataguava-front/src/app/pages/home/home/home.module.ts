import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../components/shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        HomeComponent
    ]

})
export class HomeModule {

}