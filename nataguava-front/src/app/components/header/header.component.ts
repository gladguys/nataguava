import { Observable } from 'rxjs';
import { User } from './../../models/user.model';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'guava-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'nataguava-front';
  
  constructor(private sharedService: SharedService,
              private router: Router) {}
  
  user$ = new Observable<User>(null);

  ngOnInit(): void {
    this.user$ = this.sharedService.userAsObservable();
  }

  goToHomePageCompanyLogged() {
    this.router.navigate["/home-company"];
  }

  logout() {
    this.sharedService.logout();
    this.router.navigateByUrl('/');
  }
}
