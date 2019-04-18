import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'guava-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.css']
})
export class CardVagaComponent implements OnInit {


  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
