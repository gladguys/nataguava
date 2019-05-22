import { CandidateGuard } from './components/shared/security/candidate-guard';
import { HomeCandidadeComponent } from './pages/candidate/home-candidate/home-candidate.component';
import { CompanyGuard } from './components/shared/security/company-guard';
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { AuthGuard } from './components/shared/security/auth-guard';
import { FormJobComponent } from './pages/job/form-job/form-job.component';
import { LoginAuthGuard } from './components/shared/security/login-auth-guard';
import { HomeCompanyComponent } from './pages/company/home-company/home-company.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';
import { HomeComponent } from './pages/home/home/home.component';
import { DetailJobComponent } from './pages/job/detail-job/detail-job.component';
import { QuestionaryComponent } from './pages/questionary/questionary.component';
import { QuestionFormComponent } from './pages/admin/question-form/question-form.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    {path: 'login', canActivate: [LoginAuthGuard], component: SignInComponent },
    {path: 'signup-candidate', component: SignupCandidateComponent},
    {path: 'signup-company', component: SignupCompanyComponent},
    {path: 'home-company', canActivate: [AuthGuard, CompanyGuard], component: HomeCompanyComponent},
    {path: 'home-candidate', canActivate: [AuthGuard, CandidateGuard], component: HomeCandidadeComponent},
    {path: 'signup-candidate', canActivate: [LoginAuthGuard], component: SignupCandidateComponent},
    {path: 'form-job', canActivate: [AuthGuard, CompanyGuard], component: FormJobComponent},
    {path: 'form-job/:jobId', canActivate: [AuthGuard, CompanyGuard], component: FormJobComponent},
    {path: 'job-detail/:jobId', component: DetailJobComponent },
    {path: 'questionary/:jobId', canActivate: [CandidateGuard, AuthGuard], component: QuestionaryComponent },
    {path: 'simulado/:jobId', canActivate: [CandidateGuard, AuthGuard], component: QuestionaryComponent },
    {path: 'form-question', component: QuestionFormComponent }
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);