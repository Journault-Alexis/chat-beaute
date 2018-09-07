import { Component, OnInit } from '@angular/core';

import { Cat } from '../shared/model/cat';

import { CatService } from '../shared/service/cat.service';
// import {Router} from '@angular/router';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  randomCat: Cat;

  constructor(private _catService: CatService) {
  }

  ngOnInit() {
    this.getRandomCat();
  }

  public getRandomCat() {
    this._catService.getRandomCat().subscribe((data: Cat) => {
      this.randomCat = data;
    });
  }
  public vote() {
    this._catService.increaseScore(this.randomCat.ident).subscribe(() => {
      this.getRandomCat();
    });
  }
}
