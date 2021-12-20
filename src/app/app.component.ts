import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'App',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';

  constructor(private router: Router) {
  }

  goToRoute(route: string = '/fourth'): void {
    this.router.navigateByUrl(route).then(() => {
      console.log(this.router.url)
    })
  }

}
