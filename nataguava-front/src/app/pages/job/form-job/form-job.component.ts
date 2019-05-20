import { ContentTag } from './../../../models/content-tag.model';
import { AlertService } from './../../../components/shared/alert/alert.service';
import { UserCompany } from './../../../models/user-company.model';
import { SharedService } from './../../../services/shared.service';
import { JobService } from './../../../services/job.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from './../../../models/job.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { Router } from '@angular/router';
import { RecruterService } from 'src/app/services/recruter.service';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ContentTagService } from 'src/app/services/content-tag.service';

@Component({
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent implements OnInit {


  @ViewChild('inputTag') inputTag: ElementRef;
  job: Job = new Job();
  jobForm: FormGroup;

  contents: Content[] = [];
  qtdQuestions: number = 0;

  submittingForm: boolean = false;

  tag: ContentTag = new ContentTag();
  tags: ContentTag[] = [];
  formatter = (result: ContentTag) => result.tagname.toUpperCase();

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.tags.filter(v => v.tagname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(public formBuilder: FormBuilder,
    public jobService: JobService,
    public router: Router,
    public sharedService: SharedService,
    public alertService: AlertService,
    public recruterService: RecruterService,
    public contentTagService: ContentTagService) {
  }

  ngOnInit() {
    this.loadJobForm();
    this.contentTagService.getAll().subscribe(contents => this.tags = contents);
    this.inputTag.nativeElement = "";
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

    this.contents.push({ contentTag: this.tag, qtQuestions: this.qtdQuestions });
    this.qtdQuestions = 0;
    this.tag = new ContentTag();
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
      
      console.log(jobToSave);
      this.jobService.createOrUpdate(jobToSave).subscribe(jobSaved => {
        this.submittingForm = false;
        this.alertService.success("Vaga publicada com sucesso.");
        this.router.navigate(['/home-company']);
        
      },
        err => {
          this.alertService.danger("Erro ao criar vaga: " + err);
        })
     });
    }
   
  }

}