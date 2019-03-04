import { User } from './../../../models/user.model';
import { UserService } from './../../../services/recruter.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  templateUrl: './signup-candidate.component.html',
  styleUrls: ['./signup-candidate.component.css']
})
export class SignupCandidateComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private candidateService: CandidateService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'urlRepo': ['',]
    });
  }

  signup() {
    let user = new User();
    user.email = this.signupForm.controls['email'].value;
    user.password = this.signupForm.controls['password'].value;

    let userCandidate = new Candidate();
    userCandidate.user = user;
    userCandidate.name = this.signupForm.controls['name'].value;
    userCandidate.urlRepository = this.signupForm.controls['urlRepo'].value;

  
    console.log(userCandidate);
    this.candidateService.createOrUpdate(userCandidate).subscribe((userCreated: User) =>{
      console.log(userCreated);
    });
    
  }
}
