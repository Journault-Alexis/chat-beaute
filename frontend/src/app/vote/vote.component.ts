import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Cat } from '../shared/model/cat';

import { CatService } from '../shared/service/cat.service';
import { CatDataService } from '../shared/service/catData.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit, OnDestroy {
  catsSubscribe: Subscription;
  randomCats: Array<Cat>;
  randomCat: Cat;

  constructor(private _catService: CatService, private _catDataService: CatDataService) {
  }

  ngOnInit() {
    this.subscribeto2RandomCats();
    console.log(this.catsSubscribe);
    this._catService.getCats();
  }

  ngOnDestroy() {
    this.catsSubscribe.unsubscribe();
    this.randomCats = null;
  }

  private subscribeto2RandomCats() {
    this.catsSubscribe = this._catService.getRandomCats().subscribe((data: Cat[]) => {
      this.randomCats = data;
    });
  }

  public vote(ident) {
    this._catDataService.increaseScore(ident).subscribe(() => {
    });
    this._catService.getCats();
    setTimeout(() => {
      this._catService.getScores();
    }, 1200);
  }

}
