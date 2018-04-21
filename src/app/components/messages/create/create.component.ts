import { MessageService } from './../../../shared/services/message.service';
import { Route } from './../../../shared/model/route.model';
import { SessionService } from './../../../shared/services/session.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { UsersService } from './../../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../shared/model/message.model';

@Component({
  selector: 'app-create-message',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class MessageModalComponent implements OnInit {
  @Input() route: Route;
  user: User = new User();
  message1: Message = new Message();
  apiError: string;
  modal: NgbModalRef;
  date: Date;
  isSignup: Boolean = false;
  constructor(
    private router: Router,
    private usersService: UsersService,
    private modalService: NgbModal,
    private sessionService: SessionService,
    private messageService: MessageService
  ) {}

  open(content) {
    this.modal = this.modalService.open(content);
  }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  onSubmitMessage(form) {
    this.date =  new Date();
    this.user = this.sessionService.getUser();
    const fullMessage = {
      ...this.message1,
      sender: this.user.id,
      receiver: this.route.owner._id,
      created: this.date,
      route: this.route.id
    };
    this.messageService.create(fullMessage).subscribe(
      (message) => {
        form.reset();
        this.modal.close();
        this.router.navigate(['/']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}



