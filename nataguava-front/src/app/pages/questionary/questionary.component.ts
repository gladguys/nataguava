import { Questionary } from './../../models/questionary.model';
import { Question } from './../../models/question.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ItemQuestion } from 'src/app/models/item-question.model';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {

  @ViewChild("q1") q1: ElementRef;
  @ViewChild("q2") q2: ElementRef;
  @ViewChild("q3") q3: ElementRef;
  @ViewChild("q4") q4: ElementRef;


  constructor() { }

  ngOnInit() {

    let question1: Question = new Question();
    question1.textQuestion = "Um teste de questão";
    let item1: ItemQuestion = new ItemQuestion();
    item1.text = "teste item teste item";
    item1.correct = false;
    question1.itens.push(item1);
    
    let item2: ItemQuestion = new ItemQuestion();
    item2.text = "teste item teste item";
    item2.correct = false;
    question1.itens.push(item2);

    let item3: ItemQuestion = new ItemQuestion();
    item3.text = "teste item teste item";
    item3.correct = false;
    question1.itens.push(item3);

    let item4: ItemQuestion = new ItemQuestion();
    item4.text = "teste item teste item";
    item4.correct = false;
    question1.itens.push(item4);

    

    let question2: Question = new Question();
    question2.itens.push(item1);
    question2.itens.push(item2);
    question2.itens.push(item3);
    question2.itens.push(item4);

    let questionary: Questionary = new Questionary();
    questionary.questions.push(question1);
    questionary.questions.push(question2);
  }

  q1Clicked() {
    this.q1.nativeElement.style.opacity = 1.0;
    
    this.q2.nativeElement.style.opacity = 0.3;
    this.q3.nativeElement.style.opacity = 0.3;
    this.q4.nativeElement.style.opacity = 0.3;
  }

  q2Clicked() {
    this.q2.nativeElement.style.opacity = 1.0;

    this.q1.nativeElement.style.opacity = 0.3;
    this.q3.nativeElement.style.opacity = 0.3;
    this.q4.nativeElement.style.opacity = 0.3;
  }
  q3Clicked() {
    this.q3.nativeElement.style.opacity = 1.0;

    this.q1.nativeElement.style.opacity = 0.3;
    this.q2.nativeElement.style.opacity = 0.3;
    this.q4.nativeElement.style.opacity = 0.3;
  }

  q4Clicked() {
    this.q4.nativeElement.style.opacity = 1.0;

    this.q1.nativeElement.style.opacity = 0.3;
    this.q2.nativeElement.style.opacity = 0.3;
    this.q3.nativeElement.style.opacity = 0.3;
  }

}
