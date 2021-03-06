import { Subscription } from 'rxjs/Rx';
import { SessionService } from './../../../shared/services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from './../../../shared/model/route.model';
import { RoutesService } from './../../../shared/services/routes.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  route: Route;
  user: User;
  isOwner: boolean;
  routeSubscription: Subscription;
  // tslint:disable-next-line:no-inferrable-types


  constructor(
    private sessionService: SessionService,
    private router: Router,
    private routes: ActivatedRoute,
    private routesService: RoutesService ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.routes
      .params
      .subscribe(params => {
        // tslint:disable-next-line:no-debugger
          this.routesService
          .get(params['id'])
          .subscribe(route => {
            this.route = route;
        //    this.isOwner = this.sessionService.getUser().id === this.route.owner;
            /*
            this.routeSubscription = this.sessionService.onRouteChanges()
              .subscribe(route2 => this.route = route2);
            */
          });

      });
  }

}
