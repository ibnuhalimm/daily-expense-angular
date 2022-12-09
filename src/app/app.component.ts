import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransition } from 'src/app/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeTransition
  ]
})
export class AppComponent {
  title = 'daily-expense';

  prepareOutlet(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation'];
  }
}
