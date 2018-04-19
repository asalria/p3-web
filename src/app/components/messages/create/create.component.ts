import { SessionService } from './../../../shared/services/session.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { UsersService } from './../../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-message',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class MessageModalComponent implements OnInit {

  user: User = new User();
  apiError: string;
  modal: NgbModalRef;
  isSignup: Boolean = false;
  constructor(
    private router: Router,
    private usersService: UsersService,
    private modalService: NgbModal,
    private sessionService: SessionService
  ) {}

  open(content) {
    this.modal = this.modalService.open(content);
  }

  ngOnInit() { }

  onSubmitCreateMessage(form) {
    if (this.isSignup) {
      this.usersService.create(this.user).subscribe(
        (user) => {
          form.reset();
          this.router.navigate(['/']);
        },
        (error) => {
          this.apiError = error.message;
        }
      );
    } else {
      this.sessionService.authenticate(this.user).subscribe(
        (user) => {
          form.reset();
          this.modal.close();
          this.router.navigate(['/routes']);
        },
        (error) => {
          this.apiError = error.message;
        }
      );
    }
  }

}



