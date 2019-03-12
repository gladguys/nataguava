import { CurrentUserCompany } from './../../models/current-user-company.model';
import { User } from './../../models/user.model';
import { SharedService } from './../../services/shared.service';
import { CurrentUserCandidate } from './../../models/current-user-candidate.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  loginCompany() {
      let email: string = this.loginForm.get('email').value;
      let password: string = this.loginForm.get('password').value;

     console.log(email, password);

     this.authService.login(email, password)
       .subscribe((authenticatedUser: CurrentUserCompany) => {
         console.log(authenticatedUser.user);
        this.sharedService.saveUserOnLocalStorage(
          {
            user: authenticatedUser.user.user,
            token: authenticatedUser.token
          }
        );

        this.router.navigateByUrl("/");
         
       }, err => {
         console.log(err);
       });
  }

  loginCandidate() {

  }

}
