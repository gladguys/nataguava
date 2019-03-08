import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUser } from 'src/app/models/current-user.model';
import { Router } from '@angular/router';


@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  login(): void {
    let email: string = this.loginForm.get('email').value;
    let password: string = this.loginForm.get('password').value;

    console.log(email, password);

    this.authService.login(email, password)
      .subscribe((authenticatedUser: CurrentUser) => {
        this.router.navigateByUrl("/");
      }, err => {
        console.log(err);
      });
  }

}
