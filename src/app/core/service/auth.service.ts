import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  // login(credential): Observable<any> {
  //
  // }
}
