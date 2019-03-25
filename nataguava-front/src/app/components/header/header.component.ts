import { User } from './../../models/user.model';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guava-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'nataguava-front';
  
  constructor(private sharedService: SharedService) {}
  
  user: User; 

  ngOnInit(): void {
    this.user = this.sharedService.getUserLogged();
  }

}
