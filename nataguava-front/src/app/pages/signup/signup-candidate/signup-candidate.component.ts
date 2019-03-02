import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  templateUrl: './signup-candidate.component.html',
  styleUrls: ['./signup-candidate.component.css']
})
export class SignupCandidateComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'urlRepo': ['',]
    });
  }

  signup() {
    let candidateToCreate = this.signupForm.getRawValue() as Candidate;
    console.log(candidateToCreate);
  }
}
