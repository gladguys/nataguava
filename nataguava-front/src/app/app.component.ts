import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userIsLoggedIn$ = new Observable<boolean>(null);

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private sharedService: SharedService){}

  ngOnInit() {
    this.setTitle();
    this.userIsLoggedIn$ = this.sharedService.userIsLoggedIn$;
  }

  setTitle() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map(route => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }))
    .pipe(switchMap(route => route.data))
    .subscribe(event => this.titleService.setTitle(event.title));
  }
}
