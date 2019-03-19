import { AuthGuard } from './components/shared/security/auth-guard';
import { AuthInterceptor } from './../interceptor';
import { UserService } from './services/user.service';
import { JobModule } from './pages/job/job.module';
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
import { CandidateService } from './services/candidate.service';
import { CardVagaComponent } from './components/shared/card-vaga/card-vaga.component';
import { CompanyModule } from './pages/company/company.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './pages/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    MenuComponent,
    HomeComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routes,
    SignInModule,
    SignupModule,
    CompanyModule,
    JobModule
  ],
  providers: [
    AuthService,
    UserService,
    CandidateService,
    ButtonModule,
    LoginAuthGuard,
    AuthGuard,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
