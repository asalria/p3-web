import { SessionService } from './../../../shared/services/session.service';
import { MessageService } from './../../../shared/services/message.service';
import { RoutesService } from './../../../shared/services/routes.service';
import { Message } from './../../../shared/model/message.model';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-message',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class MessageListComponent implements OnInit {
  user: User;
  messages: Array<Message> = [];
  constructor(private messageService: MessageService, private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.messageService.list()
    .subscribe((messages) => this.messages = messages);
  }

}


