import { SignInComponent } from './sign-in.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [SignInComponent],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SignInModule {

}
