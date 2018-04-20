import { Observable } from 'rxjs/Rx';
import { Route } from './../model/route.model';
import { Message } from './../model/message.model';
import { Http, Response } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService extends BaseApiService {
  private static readonly ROUTES_API = `${BaseApiService.BASE_API}/messages`;

  constructor(private http: Http) {
    super();
  }

  create(message: Message): Observable<Message> {
    return this.http.post(MessageService.ROUTES_API, JSON.stringify(message), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  edit(route: Route): Observable<Route> {
    return this.http.put(`${MessageService.ROUTES_API}/${route.id}`, JSON.stringify(route), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  get(id): Observable<Message> {
    return this.http.get(`${MessageService.ROUTES_API}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  list(): Observable<Array<Message>> {
    return this.http.get(MessageService.ROUTES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
