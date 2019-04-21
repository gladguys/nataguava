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

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    {path: 'login', canActivate: [LoginAuthGuard], component: SignInComponent },
    {path: 'signup-candidate', component: SignupCandidateComponent},
    {path: 'signup-company', component: SignupCompanyComponent},
    {path: 'home-company', canActivate: [AuthGuard, CompanyGuard], component: HomeCompanyComponent},
    {path: 'signup-candidate', canActivate: [LoginAuthGuard], component: SignupCandidateComponent},
    {path: 'form-job', canActivate: [AuthGuard], component: FormJobComponent},
    {path: 'job-detail/:jobId', component: DetailJobComponent }

]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);