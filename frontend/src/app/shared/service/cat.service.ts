import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../../../app.constant';
import { Cat } from '../model/cat';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CatDataService } from './catData.service';

@Injectable()
export class CatService {
  private cat: Cat;
  private cats: Array<Cat>;
  private actionUrl: string;
  protected randomCats: BehaviorSubject<Array<Cat>> = new BehaviorSubject<Array<Cat>>([]);
  switchTimeForCats$ = this.randomCats.asObservable();
  protected scoresCats: BehaviorSubject<Array<Cat>> = new BehaviorSubject<Array<Cat>>([]);
  scoreChanging$ = this.scoresCats.asObservable();

  constructor(private catServiceData: CatDataService) {

  }

  private getReactiveRandomCats(): Observable<Array<Cat>> {
    this.catServiceData
      .getDataforRandomCats()
      .subscribe((list: Cat[]) => {
        this.randomCats.next(list);
      });
    return this.randomCats;
  }

  private getReactiveScore(): Observable<Array<Cat>> {
    this.catServiceData
      .getDataforallCatsSortByScore()
      .subscribe((list: Cat[]) => {
        this.scoresCats.next(list);
      });
    return this.scoresCats;
  }


  public getRandomCats(): Observable<Array<Cat>> {
    return this.switchTimeForCats$;
  }

  public getCats(): Observable<Array<Cat>> {
    console.log(this.switchTimeForCats$);
    return this.getReactiveRandomCats();
  }

  public getScores(): Observable<Array<Cat>> {
    return this.getReactiveScore();
  }

  public getScoresCats(): Observable<Array<Cat>> {
    return this.scoreChanging$;
  }


}
