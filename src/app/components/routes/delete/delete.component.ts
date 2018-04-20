import { Subscription } from 'rxjs/Rx';
import { SearchService } from './../../../shared/services/search.service';
import { RoutesService } from './../../../shared/services/routes.service';
import { SessionService } from './../../../shared/services/session.service';
import { Route } from './../../../shared/model/route.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-route',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteRouteComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private routes: ActivatedRoute,
    private router: Router,
    private routesService: RoutesService ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        // tslint:disable-next-line:no-debugger
          this.routesService
          .delete(params['id'])
          .subscribe(route => {
              this.router.navigate(['/profile']);
          });

      });
  }

}
