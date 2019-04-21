import { SharedModule } from './../../components/shared/shared.module';
import { CardVagaComponent } from './../../components/shared/card-vaga/card-vaga.component';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form/company-form.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { NgModule } from '@angular/core';
import { SignupCompanyComponent } from '../signup/signup-company/signup-company.component';

@NgModule({
    declarations: [
        HomeCompanyComponent,
        CompanyFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        HomeCompanyComponent,
        CompanyFormComponent,

    ]
})
export class CompanyModule {

}