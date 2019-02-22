import { Routes, RouterModule } from '@angular/router';
import { v } from '@angular/core/src/render3';
import { VacancyFormComponent } from './pages/vacancy/vacancy-form/vacancy-form.component';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';
<<<<<<< HEAD

export const ROUTES: Routes = [
    {path: 'vacancy-form', component: VacancyFormComponent},
    {path: 'login', component: SignInComponent}
=======
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';

export const ROUTES: Routes = [
    {path: 'vacancy-form', component: VacancyFormComponent},
    {path: 'login', component: SignInComponent},
    {path: 'signup-company', component: SignupCompanyComponent},
    {path: 'signup-candidate', component: SignupCandidateComponent},
>>>>>>> 7538521d4677b5641c8e6f1f332abff8ece27c40
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);