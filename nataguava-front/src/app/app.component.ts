import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nataguava-front';

  userIsLoggedIn$ = new BehaviorSubject<boolean>(null);

  constructor(private sharedService: SharedService,){}


  ngOnInit(){
    this.userIsLoggedIn$ = this.sharedService.userIsLoggedIn$;
  }

}
