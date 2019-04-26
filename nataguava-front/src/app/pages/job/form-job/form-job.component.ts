import { UserCompany } from './../../../models/user-company.model';
import { SharedService } from './../../../services/shared.service';
import { JobService } from './../../../services/job.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from './../../../models/job.model';
import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { Router } from '@angular/router';
import { RecruterService } from 'src/app/services/recruter.service';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent implements OnInit {


  job: Job = new Job();
  jobForm: FormGroup;

  contents: Content[] = [];
  qtdQuestions: number = 0;
  contentTag: string = '';

  submittingForm: boolean = false;

  tags = ["ANDROID", "ANGULAR","CSS", "DESIGN PATTERN","GWT", "HTML", "JAVA", "JAVASCRIPT","JDBC","JPA", "MYSQL", "PHP",
          "POSTGRESQL", "PYTHON","RUBY", "RAILS", "REACT","SPRING FRAMEWORK","SQL" ,"SQL SERVER", "SWIFT", "TYPESCRIPT"];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.tags.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(public formBuilder: FormBuilder,
    public jobService: JobService,
    public router: Router,
    public sharedService: SharedService,
    public recruterService: RecruterService) {
  }

  ngOnInit() {
    this.loadJobForm();

    
  }


  loadJobForm() {
    this.jobForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'numberOfBestCandidates': [''],
      'status': [''],
      'location': ['', Validators.required]
    });
  }

  addContent() {

    this.contents.push({ contentTag: this.contentTag, qtQuestions: this.qtdQuestions });
    this.qtdQuestions = 0;
    this.contentTag = '';
  }

  removeContent(content: Content) {
    let index = this.contents.indexOf(content);
    if (index > -1) {
      this.contents.splice(index, 1);
    }
  }

  save() {
    this.submittingForm = true;
   if(this.jobForm.valid) {
    let jobToSave = this.jobForm.getRawValue() as Job;
    jobToSave.contents = this.contents;
    jobToSave.status = "CREATED";

    let userId = this.sharedService.getUserLogged().id;
    this.recruterService.getByUserId(userId).subscribe((userCompany: UserCompany) => {
      jobToSave.userCompany = userCompany;
      
      this.jobService.createOrUpdate(jobToSave).subscribe(jobSaved => {
        this.submittingForm = false;
        this.router.navigate(['/home-company']);
        
      },
        err => {
          console.error(err);
        })
     });
    }
   
  }

}