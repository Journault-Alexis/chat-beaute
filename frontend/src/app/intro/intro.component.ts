import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  leftCatArrive: number;
  rightCatArrive: number;
  shutdownHeart1: string;
  shutdownHeart2: string;
  apparitionText: number;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.animationIntro();

  }

  private apparitionLeftCat() {
    setTimeout(() => {
      this.leftCatArrive = 0;
    }, 800);

  }
  private apparitionRigthCat() {
    setTimeout(() => {
      this.rightCatArrive = 0;
    }, 800);

  }

  private clignotementCoeurs() {

    setTimeout(() => {
      this.shutdownHeart1 = 'initial';
    }, 2500);
    setTimeout(() => {
      this.shutdownHeart1 = 'none';
    }, 2700);
    setTimeout(() => {
      this.shutdownHeart1 = 'initial';
    }, 2900);
    setTimeout(() => {
      this.shutdownHeart1 = 'none';
    }, 3100);
    setTimeout(() => {
      this.shutdownHeart1 = 'initial';
    }, 3300);

  }

  private apparitionClaim() {
    setTimeout(() => {
      this.apparitionText = 18;
    }, 2900);
  }

  public animationIntro() {

    this.apparitionLeftCat();
    this.apparitionRigthCat();
    this.clignotementCoeurs();
    this.apparitionClaim();
    setTimeout(() => {
      this._router.navigateByUrl('/lovelycats');
    }, 5500);


  }
}
