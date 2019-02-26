import { Routes, RouterModule } from '@angular/router';
import { VacancyFormComponent } from './pages/vacancy/vacancy-form/vacancy-form.component';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';

export const ROUTES: Routes = [
    {path: 'vacancy-form', component: VacancyFormComponent},
    {path: 'login/company', component: SignInComponent},
    {path: 'signup-company', component: SignupCompanyComponent},
    {path: 'signup-candidate', component: SignupCandidateComponent},
    
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);