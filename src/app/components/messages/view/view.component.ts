import { Message } from './../../../shared/model/message.model';
import { Subscription } from 'rxjs/Rx';
import { SessionService } from './../../../shared/services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from './../../../shared/model/route.model';
import { RoutesService } from './../../../shared/services/routes.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/services/message.service';


@Component({
  selector: 'app-view-message',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class MessageViewComponent implements OnInit {
  message: Message;
  isOwner: boolean;
  routeSubscription: Subscription;
  // tslint:disable-next-line:no-inferrable-types

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private routes: ActivatedRoute,
    private routesService: RoutesService,
    private messageService: MessageService ) { }

    ngOnInit() {
      this.routes
        .params
        .subscribe(params => {
          // tslint:disable-next-line:no-debugger
            this.messageService
            .get(params['id'])
            .subscribe(message => {
              this.message = message;
          //    this.isOwner = this.sessionService.getUser().id === this.route.owner;
              /*
              this.routeSubscription = this.sessionService.onRouteChanges()
                .subscribe(route2 => this.route = route2);
              */
            });
        });
    }

}
