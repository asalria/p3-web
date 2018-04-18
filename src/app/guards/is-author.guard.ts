import { SessionService } from './../shared/services/session.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IsAuthorGuard implements CanActivate {
  id: String;
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthor = this.sessionService.isAuthor(this.id);
    if (!isAuthor) {
      this.router.navigate(['/routes']);
    }
    return isAuthor;
  }
}
