import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ScoreComponent } from './score/score.component';
import { VoteComponent } from './vote/vote.component';

import { CatService } from './shared/service/cat.service';
import { CatDataService } from './shared/service/catData.service';

import { Configuration } from '../app.constant';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ScoreComponent,
    VoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CatService, CatDataService, HttpClient, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
