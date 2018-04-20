import { Observable } from 'rxjs/Rx';
import { Route } from './../model/route.model';
import { Http, Response } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoutesService extends BaseApiService {
  private static readonly ROUTES_API = `${BaseApiService.BASE_API}/routes`;

  constructor(private http: Http) {
    super();
  }

  create(route: Route): Observable<Route> {
   // console.log(route);
    return this.http.post(RoutesService.ROUTES_API, JSON.stringify(route), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  edit(route: Route): Observable<Route> {
    return this.http.put(`${RoutesService.ROUTES_API}/${route.id}`, JSON.stringify(route), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  get(id): Observable<Route> {
    return this.http.get(`${RoutesService.ROUTES_API}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id): Observable<Route> {
    return this.http.delete(`${RoutesService.ROUTES_API}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  list(): Observable<Array<Route>> {
    return this.http.get(RoutesService.ROUTES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  listUserRoutes(id): Observable<Array<Route>> {
    return this.http.get(`${RoutesService.ROUTES_API}/user/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  find(search): Observable<Array<Route>> {
    return this.http.get(`${RoutesService.ROUTES_API}/location/${search}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
