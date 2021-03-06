import { SearchService } from './../../../shared/services/search.service';
import { RoutesService } from './../../../shared/services/routes.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { User } from './../../../shared/model/user.model';
import { Route } from './../../../shared/model/route.model';
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: User;
  userSubscription: Subscription;
  fullImagePath: string;
  searchTxt: string;
  routes: Array<Route> = [];
  isCollapsed: boolean;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private routeService: RoutesService,
    private searchService: SearchService
  ) { }


  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.userSubscription = this.sessionService.onUserChanges()
      .subscribe(user => this.user = user);
    this.fullImagePath = 'https://asalria.github.io/p3-web/assets/images/logo.png';
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  performSearch(searchTerm: HTMLInputElement): void {
      this.searchService.filterBy(searchTerm.value);
    }

}
