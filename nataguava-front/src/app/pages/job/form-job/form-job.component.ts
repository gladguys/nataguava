import { UserCompany } from './../../../models/user-company.model';
import { SharedService } from './../../../services/shared.service';
import { JobService } from './../../../services/job.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from './../../../models/job.model';
import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { Router } from '@angular/router';
import { RecruterService } from 'src/app/services/recruter.service';

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


  constructor(public formBuilder: FormBuilder,
    public jobService: JobService,
    public router: Router,
    public sharedService: SharedService,
    public recruterService: RecruterService) {
  }

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'numberOfBestCandidates': [''],
      'status': [''],
      'location': ['', Validators.required]
    });
  }

  addContent() {
    console.log(this.contentTag);
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
   if(this.jobForm.valid) {
    let jobToSave = this.jobForm.getRawValue() as Job;
    jobToSave.contents = this.contents;
    jobToSave.status = "CREATED";

    let userId = this.sharedService.getUserLogged().id;
    console.log(userId);
    this.recruterService.getByUserId(userId).subscribe((userCompany: UserCompany) => {
      jobToSave.userCompany = userCompany;
      console.log(this.job);
      
      this.jobService.createOrUpdate(jobToSave).subscribe(jobSaved => {
        console.log(`Job ${jobSaved.title} created with success`);
        this.router.navigate(['/home-company']);
      },
        err => {
          console.error(err);
        })
     });
    }
   
  }

}