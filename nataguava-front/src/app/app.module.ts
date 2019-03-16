import { LoginAuthGuard } from './components/shared/security/login-auth-guard';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
 
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { AuthService } from './services/auth.service';
import { SignupModule } from './pages/signup/signup.module';
import { UserService } from './services/recruter.service';
import { CandidateService } from './services/candidate.service';
import { HomeCompanyComponent } from './pages/company/home-company/home-company.component';
import { CardVagaComponent } from './components/shared/card-vaga/card-vaga.component';
import { CompanyModule } from './pages/company/company.module';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    MenuComponent, 
    CardVagaComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routes,
    SignInModule,
    SignupModule,
    CompanyModule
  ],
  providers: [
    AuthService,
    UserService,
    CandidateService,
    ButtonModule,
    LoginAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
