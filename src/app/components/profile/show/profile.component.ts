import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UsersService } from './../../../shared/services/user.service';
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  userSubscription: Subscription;
  // tslint:disable-next-line:no-inferrable-types
  isOwner: boolean = false;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private routes: ActivatedRoute,
    private usersService: UsersService ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        // tslint:disable-next-line:no-debugger
        if ( params['id'] ) {
          this.usersService
          .get(params['id'])
          .subscribe(user => {
            this.user = user;
            this.isOwner = this.sessionService.getUser().email === this.user.email;
            this.userSubscription = this.sessionService.onUserChanges()
              .subscribe(user2 => this.user = user2);
          });
        } else {
          this.user = this.sessionService.getUser();
          this.isOwner = this.sessionService.getUser().email === this.user.email;
          this.userSubscription = this.sessionService.onUserChanges()
          .subscribe(user => this.user = user);
        }

      });
    }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
