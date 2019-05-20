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
import { Observable, Subject, merge } from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import { ContentTagService } from 'src/app/services/content-tag.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent implements OnInit {


  @ViewChild('instance') instance: NgbTypeahead;
  job: Job = new Job();
  jobForm: FormGroup;


  contents: Content[] = [];
  qtdQuestions: number = 0;
  contentname: string = "";

  submittingForm: boolean = false;

  tags: ContentTag[] = [];
  formatter = (result: ContentTag) => result.tagname.toUpperCase();
  tag: ContentTag = new ContentTag();
  totalNumQuestions = 0;


  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.tags.map(t => t.tagname).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
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
    
  }


  loadJobForm() {
    this.jobForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'numberOfBestCandidates': [''],
      'status': [''],
      'tagname': [''],
      'location': ['', Validators.required]
    });
  }

  addContent() {
    if(this.totalNumQuestions + this.qtdQuestions > 30) {
      window.alert("MAX QUESTÃO É 30");
    } else {
      this.tag.tagname = this.contentname;
      this.tags.forEach(t => this.setIdContent(t));
      this.contents.push({ contentTag: Object.assign({}, this.tag), qtQuestions: this.qtdQuestions });
      this.totalNumQuestions += this.qtdQuestions;
      this.qtdQuestions = 0;
      this.contentname = "";
      
    }
  }

  setIdContent(t: ContentTag) {
    if(t.tagname === this.contentname) {
      this.tag.id = t.id;
      return;
    }
  }

  removeContent(content: Content) {
    this.totalNumQuestions -= content.qtQuestions;
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