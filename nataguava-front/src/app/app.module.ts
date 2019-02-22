import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { VacancyFormComponent } from './pages/vacancy/vacancy-form/vacancy-form.component';
import { routes } from './app.routes';
<<<<<<< HEAD
=======
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';
>>>>>>> 7538521d4677b5641c8e6f1f332abff8ece27c40
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    MenuComponent,
    VacancyFormComponent,
<<<<<<< HEAD
    SignInComponent,
=======
    SignupCompanyComponent,
    SignupCandidateComponent,
>>>>>>> 7538521d4677b5641c8e6f1f332abff8ece27c40
    SignInComponent
  ],
  exports:[
    HeaderComponent,
    VacancyFormComponent,
  
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
