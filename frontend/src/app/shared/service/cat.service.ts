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

  public getRandomCats(): Observable<Array<Cat>> {
    return this.http.get<Cat[]>(this.actionUrl + 'random');
  }
  public increaseScore(_id: string): Observable<string> {
    console.log("avt le départ",_id);
    return this.http.put<string>(this.actionUrl, { params: { _id: _id } });
  }
}
