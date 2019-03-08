import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
 
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { AuthService } from './services/auth.service';
import { SignupModule } from './pages/signup/signup.module';
import { UserService } from './services/recruter.service';
import { CandidateService } from './services/candidate.service';
import { HomeCompanyComponent } from './pages/company/home-company/home-company.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    SignupCandidateComponent,
    SignInComponent,
    HomeCompanyComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routes,
    SignInModule,
    SignupModule
  ],
  providers: [
    AuthService,
    UserService,
    CandidateService,
    ButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
