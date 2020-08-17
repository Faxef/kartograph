import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  private innerWidth: number;
  mobile: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.mobile = this.innerWidth < 1200;
  }

}
