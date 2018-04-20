import { SessionService } from './../../../shared/services/session.service';
import { Subscription } from 'rxjs/Rx';
import { SearchService } from './../../../shared/services/search.service';
import { RoutesService } from './../../../shared/services/routes.service';
import { Route } from './../../../shared/model/route.model';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-userroutes',
  templateUrl: './userroutes.component.html',
  styleUrls: ['./userroutes.component.css']
})
export class UserroutesComponent implements OnInit {
  @Input() user: User;
  routes: Array<Route> = [];
  address: string;
  routesSubscription: Subscription;
  constructor(private routesService: RoutesService,
  private searchService: SearchService,
  private sessionService: SessionService) { }

  ngOnInit() {
    this.routesService.listUserRoutes(this.user.id)
    .subscribe(
      (routes) => {
        this.routes = routes;
      });
  }


}
