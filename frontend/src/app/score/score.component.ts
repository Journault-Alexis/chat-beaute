import { Component, OnInit, OnDestroy, Testability } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Cat } from '../shared/model/cat';

import { CatService } from '../shared/service/cat.service';

// import {Router} from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit, OnDestroy {
  catsScoresSubscribe: Subscription;
  cats: Array<Cat>;
  cat: Cat;

  constructor(private _catService: CatService) {
    this.catsScoresSubscribe = this._catService.getScoresCats().subscribe(cats => {
      this.cats = cats;
    });
  }

  ngOnInit() {

    this._catService.getScores();

  }

  ngOnDestroy() {
    this.catsScoresSubscribe.unsubscribe();
    this.cats = null;
  }
  getScore() {
    this.catsScoresSubscribe = this._catService.getScoresCats().subscribe(cats => {
      this.cats = cats;
    });
  }
}


