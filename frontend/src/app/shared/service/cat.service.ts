import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../../app.constant';
import { Cat } from '../model/cat';

@Injectable()
export class CatService {
  private cat: Cat;
  private actionUrl: string;


  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + '/';
  }
  public getRandomCat(): Observable<Cat> {
    return this.http.get<Cat>(this.actionUrl + '/random');
  }
  public increaseScore(ident: string): Observable<string> {
    return this.http.put<string>(this.actionUrl, { params: { ident: ident } });
  }
}
