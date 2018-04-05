import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { UsersService } from './../../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User();
  apiError: string;
  modal: NgbModalRef;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private modalService: NgbModal
  ) {}

  open(content) {
    this.modal = this.modalService.open(content);
  }

  onSubmitSignup(signupForm) {
    this.usersService.create(this.user).subscribe(
      (user) => {
        signupForm.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
