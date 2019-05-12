import { ActivatedRoute } from '@angular/router';
import { Questionary } from './../../models/questionary.model';
import { Question } from './../../models/question.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ItemQuestion } from 'src/app/models/item-question.model';
import { QuestionaryService } from 'src/app/services/questionary.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {


  questionary: Questionary;
  loaded: boolean = false;

  constructor(public questionaryService: QuestionaryService,
              public route: ActivatedRoute,
              public spinner: NgxSpinnerService
              ) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.loaded=  true;
      this.questionaryService.generate(jobId).subscribe(q => {
        this.questionary = q;
        console.log(this.questionary);
        this.spinner.hide();
      } );
  }, 3000);
   

  }

  q1Clicked() {
 
  }

  q2Clicked() {

  }
  q3Clicked() {
   
  }

  q4Clicked() {
   
  }

}
