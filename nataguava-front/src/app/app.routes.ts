import { Routes, RouterModule } from '@angular/router';
import { v } from '@angular/core/src/render3';
import { VacancyFormComponent } from './pages/vacancy/vacancy-form/vacancy-form.component';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const ROUTES: Routes = [
    {path: 'vacancy-form', component: VacancyFormComponent},
    {path: 'login', component: SignInComponent}
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);