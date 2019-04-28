import { ShowIfUserCompanyComponent } from './show-if-user-company.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule(
    {
        imports:[CommonModule],
        declarations: [ShowIfUserCompanyComponent],
        exports: [ShowIfUserCompanyComponent]
    }
)
export class ShowIfUserCompanyModule {

}