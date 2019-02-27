import { SignInComponent } from './sign-in.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@NgModule({
    declarations: [SignInComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SignInModule {

}