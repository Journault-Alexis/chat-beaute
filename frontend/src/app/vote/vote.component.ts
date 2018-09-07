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

  randomCats: Array<Cat>;
  randomCat: Cat;

  constructor(private _catService: CatService) {
  }

  ngOnInit() {
    this.get2RandomCats();
     }

  public get2RandomCats() {
    this._catService.getRandomCats().subscribe((data: Cat[]) => {
      this.randomCats = data;
      console.log(this.randomCats);
    });
  }
  public vote(ident) {
    console.log("yololo");
    console.log(ident);
    this._catService.increaseScore(ident).subscribe(() => {
      console.log(ident);
      this.get2RandomCats();
    });
  }
}
