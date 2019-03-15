import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'guava-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.css']
})
export class CardVagaComponent implements OnInit {


  @Input() title: string = '';
  @Input() localidadeVaga: string = '';
  @Input() image: string = '';

  constructor() { }

  ngOnInit() {
  }

}
