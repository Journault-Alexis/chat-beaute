import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../../../app.constant';
import { Cat } from '../model/cat';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CatDataService {
    private cat: Cat;
    private cats: Array<Cat>;
    private actionUrl: string;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl + '/';
    }

    public getDataforRandomCats(): Observable<Array<Cat>> {
        return this.http.get<Cat[]>(this.actionUrl + 'random');
    }

    public getDataforallCatsSortByScore(): Observable<Array<Cat>> {
        return this.http.get<Cat[]>(this.actionUrl + 'all');
    }

    public increaseScore(_id: string): Observable<string> {
        const id = '?_id=';
        const query = id + _id;
   // TO DO : don't use this little tricky null for faking argument
        return this.http.put<string>(this.actionUrl + query, null);
    }
}
