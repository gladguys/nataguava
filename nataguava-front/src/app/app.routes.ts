import { HomeCompanyComponent } from './pages/company/home-company/home-company.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';

export const ROUTES: Routes = [
    {path: 'login', component: SignInComponent},
    {path: 'signup-candidate', component: SignupCandidateComponent},
    {path: 'login', component: SignInComponent},
    {path: 'home-company', component: HomeCompanyComponent},
    {path: 'signup-candidate', component: SignupCandidateComponent}
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);