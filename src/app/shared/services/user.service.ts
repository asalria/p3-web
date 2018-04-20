import { Observable } from 'rxjs/Rx';
import { User } from './../model/user.model';
import { Http } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService extends BaseApiService {
  private static readonly USERS_API = `${BaseApiService.BASE_API}/users`;

  constructor(private http: Http) {
    super();
  }

  create(user: User): Observable<User> {
    return this.http.post(UsersService.USERS_API, JSON.stringify(user), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  edit(user: User): Observable<User> {
    user = User.fromJson(user);
    return this.http.put(`${UsersService.USERS_API}/${user.id}`, JSON.stringify(user), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  get(id): Observable<User> {
    return this.http.get(`${UsersService.USERS_API}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

}
