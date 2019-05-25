import { User } from './../../../models/user.model';
import { CompanyService } from './../../../services/company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from "@angular/core";
import { UserCompany } from 'src/app/models/user-company.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'signup-company.component.html',
    styleUrls: ['signup-company.component.css']
})
export class SignupCompanyComponent {
    signupForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'phone': ['',]
    });
  }

  signup() {
    let user = new User();
    user.email = this.signupForm.controls['email'].value;
    user.password = this.signupForm.controls['password'].value;

    let userCompany = new UserCompany();
    userCompany.user = user;
    userCompany.name = this.signupForm.controls['name'].value;
    userCompany.phone = this.signupForm.controls['phone'].value;
    
    this.companyService
            .createOrUpdate(userCompany)
            .subscribe((userCreated: User) =>{
              this.router.navigateByUrl("/");
            });
    
  }
}