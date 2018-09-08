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
    this._catService.getCats();
  }

  ngOnDestroy() {
    this.catsSubscribe.unsubscribe();
    this.randomCats = null;
  }

  public subscribeto2RandomCats() {
    this.catsSubscribe = this._catService.getRandomCats().subscribe((data: Cat[]) => {
      this.randomCats = data;
    });
  }

  public vote(ident) {
    console.log("1");
    this._catDataService.increaseScore(ident).subscribe(() => {
    });
    console.log("3");
      this._catService.getCats();
      console.log("7");
  }

}
