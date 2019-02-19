import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { VacancyFormComponent } from './pages/vacancy/vacancy-form/vacancy-form.component';
import { routes } from './app.routes';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    MenuComponent,
    VacancyFormComponent,
    SignInComponent,
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
