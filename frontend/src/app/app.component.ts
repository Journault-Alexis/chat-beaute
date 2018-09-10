import { Component } from '@angular/core';
import { animRoutes } from './shared/route/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animRoutes]
})
export class AppComponent {
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }
}
