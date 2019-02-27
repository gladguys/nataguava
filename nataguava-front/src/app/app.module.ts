import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { routes } from './app.routes';
import { SignupCandidateComponent } from './pages/signup/signup-candidate/signup-candidate.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignInModule } from './pages/sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    MenuComponent,
    SignupCandidateComponent,
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routes,
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
