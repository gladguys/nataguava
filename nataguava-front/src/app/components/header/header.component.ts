import { ProfileEnum } from './../../models/enums/profileEnum';
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

  goHome() {
    console.log("dwde");
    if(this.sharedService.getUserLogged().profileEnum == ProfileEnum.ROLE_RECRUTER) {
      this.router.navigate["/home-company"];
    } else {
      console.log("dede");
      this.router.navigateByUrl("/home-candidate");
    }
  }

  logout() {
    this.sharedService.logout();
    this.router.navigateByUrl('/');
  }
}
