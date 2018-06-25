import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HOST } from './config';

@Injectable()
export class CrazyRequestsService {

  constructor(private readonly http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(HOST + url);
  }
}
