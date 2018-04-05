import { SessionService } from './../../../shared/services/session.service';
import { print } from 'util';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  apiError: string;

  modal: NgbModalRef;
  constructor(private modalService: NgbModal, private sessionService: SessionService, private router: Router) { }
  open(content) {
    this.modal = this.modalService.open(content);
  }

  ngOnInit() { }

  onSubmitLogin(loginForm) {
    this.sessionService.authenticate(this.user).subscribe(
      (user) => {
        loginForm.reset();
        this.modal.close();
        this.router.navigate(['/routes']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
