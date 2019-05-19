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
    {
        path: '', 
        component: HomeComponent,
        data: {
            title: 'Nataguava'
        } 
    },
    {
        path: 'login', 
        canActivate: [LoginAuthGuard], 
        component: SignInComponent, 
        data: {
            title: 'Entrar'
        }
    },
    {
        path: 'signup-candidate', 
        component: SignupCandidateComponent,
        data: {
            title: 'Cadatrar-se'
        }
    },
    {
        path: 'signup-company', 
        component: SignupCompanyComponent,
        data: {
            title: 'Entrar'
        }
    },
    {
        path: 'home-company', 
        canActivate: [AuthGuard, CompanyGuard], 
        component: HomeCompanyComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'home-candidate', 
        canActivate: [AuthGuard, CandidateGuard], 
        component: HomeCandidadeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'signup-candidate', 
        canActivate: [LoginAuthGuard], 
        component: SignupCandidateComponent,
        data: {
            title: 'Entrar'
        }
    },
    {
        path: 'form-job', 
        canActivate: [AuthGuard, CompanyGuard], 
        component: FormJobComponent,
        data: {
            title: 'Cadastrar Vaga'
        }
    },
    {
        path: 'job-detail/:jobId', 
        component: DetailJobComponent,
        data: {
            title: 'Detalhes da Vaga'
        } 
    },
    {
        path: 'questionary/:jobId', 
        canActivate: [AuthGuard], 
        component: QuestionaryComponent,
        data: {
            title: 'Questionário'
        }
     },
    {
        path: 'form-question', 
        component: QuestionFormComponent,
        data: {
            title: 'Cadastro de questões'
        }
    }
]

export const routes:  ModuleWithProviders = RouterModule.forRoot(ROUTES);