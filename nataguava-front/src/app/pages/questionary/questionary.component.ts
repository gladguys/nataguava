import { ActivatedRoute } from '@angular/router';
import { Questionary } from './../../models/questionary.model';
import { Question } from './../../models/question.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ItemQuestion } from 'src/app/models/item-question.model';
import { QuestionaryService } from 'src/app/services/questionary.service';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {


  questionary: Questionary;

  constructor(public questionaryService: QuestionaryService,
              public route: ActivatedRoute,
              ) { }

  ngOnInit() {

    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.questionaryService.generate(jobId).subscribe(q => {
      this.questionary = q;
      console.log(this.questionary);
    } );

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
