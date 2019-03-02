import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signup-candidate.component.html',
  styleUrls: ['./signup-candidate.component.css']
})
export class SignupCandidateComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'urlRepo': ['',]
    });
  }

  signup() {
  
  }
}
