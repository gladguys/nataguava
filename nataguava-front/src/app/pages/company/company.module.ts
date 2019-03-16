import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form/company-form.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        CommonModule,
        HomeCompanyComponent,
        CompanyFormComponent
    ],
    exports: [
        HomeCompanyComponent,
        CompanyFormComponent
    ]
})
export class CompanyModule {

}