import { FormaterTime } from './pipes/formater-time.pipe';
import { FormsModule } from '@angular/forms';
import { CandidateModule } from './pages/candidate/candidate.module';
import { CandidateGuard } from './components/shared/security/candidate-guard';
import { CompanyGuard } from './components/shared/security/company-guard';
import { HomeModule } from './pages/home/home/home.module';
import { AuthGuard } from './components/shared/security/auth-guard';
import { AuthInterceptor } from './../interceptor';
import { UserService } from './services/user.service';
import { JobModule } from './pages/job/job.module';
import { LoginAuthGuard } from './components/shared/security/login-auth-guard';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CountdownModule } from 'ngx-countdown';

import {ButtonModule} from 'primeng/button';
 
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { AuthService } from './services/auth.service';
import { SignupModule } from './pages/signup/signup.module';
import { CandidateService } from './services/candidate.service';
import { CompanyModule } from './pages/company/company.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { QuestionaryComponent } from './pages/questionary/questionary.component';
import { SharedModule } from './components/shared/shared.module';
import { AlertService } from './components/shared/alert/alert.service';
import { ShowIfUserCompanyModule } from './directives/show-if-user-company/show-if-user-company.module';
import { ShowIfCandidateModule } from './directives/show-if-candidate/show-if-candidate.module';
import { AdminModule } from './pages/admin/admin.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    QuestionaryComponent,
    FormaterTime
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
    JobModule,
    HomeModule,
    RouterModule,
    NgbModule,
    SharedModule,
    CandidateModule,
    ShowIfUserCompanyModule,
    ShowIfCandidateModule,
    AdminModule,
    FormsModule,
    NgxSpinnerModule,
    CountdownModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService,
    UserService,
    CandidateService,
    AlertService,
    ButtonModule,
    LoginAuthGuard,
    CompanyGuard,
    CandidateGuard,
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
