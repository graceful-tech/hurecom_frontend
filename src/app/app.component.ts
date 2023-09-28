

import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hurecom-customers-app';
  showHeader: boolean = false;

  constructor(
    private gs: GlobalService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] === '/login' || event['url'] === '/') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
