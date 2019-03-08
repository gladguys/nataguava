import { HomeCompanyComponent } from './pages/company/home-company/home-company.component';
import { Routes, RouterModule } from '@angular/router';
import { v } from '@angular/core/src/render3';
import { VacancyFormComponent } from './pages/vacancy/vacancy-form/vacancy-form.component';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';

export const ROUTES: Routes = [
    {path: 'job-form', component: VacancyFormComponent},
    {path: 'login', component: SignInComponent},
    {path: 'signup-company', component: SignupCompanyComponent},
    {path: 'home-company', component: HomeCompanyComponent},
    {path: 'signup-candidate', component: SignupCandidateComponent},
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);