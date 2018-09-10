import {IntroComponent} from '../../intro/intro.component';
import {RouterModule, Routes} from '@angular/router';
import {ScoreComponent} from '../../score/score.component';
import {VoteComponent} from '../../vote/vote.component';
import {HomeComponent} from '../../home/home.component';

import {NgModule} from '@angular/core';


const appRoutes: Routes = [
  {path: '', component: IntroComponent, pathMatch: 'full'},
  {
    path: 'lovelycats', component: HomeComponent, data: { page: 'lovelycats' } },
    {path: 'lovelycats', redirectTo: 'lovelycats', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {onSameUrlNavigation: 'reload'}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}



