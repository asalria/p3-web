import { BaseApiService } from './base-api.service';
import { User } from './../model/user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Route } from '@angular/router';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()

export class SearchService {
    private subject = new Subject<string>();

    filterBy(value: string) {
        this.subject.next(value);
    }

    onFilterChange(): Observable<string> {
       return this.subject.asObservable();
    }
}
