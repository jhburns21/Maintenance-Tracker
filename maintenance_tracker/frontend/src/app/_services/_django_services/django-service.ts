import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DjangoService {
  public httpOptions: { headers: HttpHeaders };
  public url = '';

  constructor(
      public http: HttpClient,
  ) {
    this.httpOptions = {headers: new HttpHeaders()};
  }
}