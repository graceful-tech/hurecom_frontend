import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  role: any;
  currentNavId: any;

  constructor(private gs: GlobalService) {}

  ngOnInit(): void {
    this.currentNavId = sessionStorage.getItem('currentNavId');
    this.setNav(this.currentNavId);
  }
    
  setNav(value: string) {
    this.gs.setNav(value);
  }
}
