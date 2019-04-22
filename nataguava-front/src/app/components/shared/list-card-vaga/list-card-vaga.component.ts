import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'list-card-vaga',
  templateUrl: './list-card-vaga.component.html',
  styleUrls: ['./list-card-vaga.component.css']
})
export class ListCardVagaComponent implements OnInit {

  @Input() jobs: Array<Job> = [];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
