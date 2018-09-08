import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Cat } from '../shared/model/cat';

import { CatService } from '../shared/service/cat.service';
import { CatDataService } from '../shared/service/catData.service';
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

  constructor(private _catService: CatService, private _catDataService: CatDataService) {

  }

  ngOnInit() {
    this.subscribetoScoresCats();
    this._catService.getScores();

  }

  ngOnDestroy() {
    this.catsScoresSubscribe.unsubscribe();
    this.cats = null;
  }

  public subscribetoScoresCats() {
    this.catsScoresSubscribe = this._catService.getScoresCats().subscribe((data: Cat[]) => {
      this.cats = data;
    });

  }
}
