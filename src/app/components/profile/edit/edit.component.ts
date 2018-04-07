import { Subscription } from 'rxjs/Rx';
import { SessionService } from './../../../shared/services/session.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { UsersService } from './../../../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  // tslint:disable-next-line:no-inferrable-types
  isOwner: boolean = false;
  apiError: string;
  modal: NgbModalRef;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private usersService: UsersService,
    private modalService: NgbModal,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        this.usersService
          .get(params['id'])
          .subscribe(user => {
            this.user = user;
            this.isOwner = this.sessionService.getUser().email === this.user.email;
          });
      });
  }

  onSubmitEdit(signupForm) {
    this.usersService.edit(this.user).subscribe(
      (user) => {
        if (this.isOwner) {
          this.sessionService.setUser(user);
        }
        signupForm.reset();
        this.router.navigate(['/profile']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
