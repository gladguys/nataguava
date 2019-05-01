import { OnInit, Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ItemQuestion } from "src/app/models/item-question.model";
import { Question } from "src/app/models/question.model";
import { QuestionService } from "src/app/services/question.service";

@Component({
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

    questionForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private questionService: QuestionService) { }

    ngOnInit() {
      this.questionForm = this.formBuilder.group({
        'title': ['', Validators.required],
        'item1': ['', Validators.required],
        'item2': ['', Validators.required],
        'item3': ['', Validators.required],
        'item4': ['', Validators.required],
        'rightAnswer' : ['', Validators.required]
      });
    }

    submit() {
        let question = new Question();
        question.textQuestion = this.questionForm.controls['title'].value;

        let item1  = new ItemQuestion();
        item1.text = this.questionForm.controls['item1'].value;

        let item2  = new ItemQuestion();
        item2.text = this.questionForm.controls['item2'].value;

        let item3  = new ItemQuestion();
        item3.text = this.questionForm.controls['item3'].value;

        let item4  = new ItemQuestion();
        item4.text = this.questionForm.controls['item4'].value;

        let itemCerto : string = this.questionForm.controls['rightAnswer'].value;

        switch(itemCerto) {
          case '1':
            item1.correct = true;
            break;
          case '2':
            item2.correct = true;
            break;
          case '3':
            item3.correct = true;
            break;
          case '4':
            item4.correct = true;
            break;
        }

        let itensQuestion = Array<ItemQuestion>();

        itensQuestion.push(item1, item2, item3, item4); 

        question.itens = itensQuestion;

        console.log(question);
        this.questionService.save(question).subscribe((questionCreated: Question) => {
          alert("Questão criada com sucesso!");
        });
    }
  }