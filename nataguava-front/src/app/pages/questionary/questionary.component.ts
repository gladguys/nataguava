import { ResultCandidateJobService } from './../../services/result-candidate-job.service';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionary } from './../../models/questionary.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionaryService } from 'src/app/services/questionary.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountdownComponent } from 'ngx-countdown';
import { ItemQuestion } from 'src/app/models/item-question.model';
import { Question } from 'src/app/models/question.model';
import { ResultCandidateJob } from 'src/app/models/result-candidate-job.model';
import { CandidateService } from 'src/app/services/candidate.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {

  questionary: Questionary;
  loaded: boolean = false;
  @ViewChild("content") content: ElementRef;
  @ViewChild(CountdownComponent) countdown: CountdownComponent;
  result: ResultCandidateJob = new ResultCandidateJob();

  jobId: number;

  constructor(public questionaryService: QuestionaryService,
    public route: ActivatedRoute,
    public spinner: NgxSpinnerService,
    public modalService: NgbModal,
    public router: Router,
    public sharedService: SharedService,
    public candidateService: CandidateService,
    public resultCandidateJobService: ResultCandidateJobService
  ) {
   }

  ngOnInit() {
    
    this.jobId = parseInt(this.route.snapshot.paramMap.get('jobId'));

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.loaded = true;
      this.questionaryService.generate(this.jobId).subscribe(q => {
        this.questionary = q;
        this.spinner.hide();
        this.openVerticallyCentered(this.content);
      });
    }, 3000);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  cancelar() {
    this.router.navigateByUrl("/");
  }

  start() {
    this.countdown.begin();
  }

  finishTest() {
    this.router.navigateByUrl("/");
  }

  onItemClicked(item: ItemQuestion, question: Question) {
    question.itemChosen = item;
  }

  onBtnConfirmarClicked(questao) {
    console.log(questao);
  }

  finishQuestionary(){
    console.log(this.questionary);
    let counter = 0;
    this.questionary.questions.forEach(q => {
      if(q.itemChosen.correct) counter++;
    })
    console.log(counter);
    this.candidateService.findByUserId(this.sharedService.getUserLogged().id)
      .subscribe(candidate => {
        this.result.candidateId = candidate.id;
                              this.result.jobId = this.jobId;
                              this.result.result = counter;
                              this.resultCandidateJobService.create(this.result).subscribe(r => console.log(r));
      })
      
  }

}
