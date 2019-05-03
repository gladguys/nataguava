import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  ngOnInit() {}

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
