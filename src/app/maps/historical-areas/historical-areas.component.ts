import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './historical-areas.component.html',
  styleUrls: ['./historical-areas.component.scss']
})
export class HistoricalAreasComponent implements OnInit {
  // Заголовок
  title = 'Историко-культурные районы мира';

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  isEdit: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  projector(e) {
    e.preventDefault();
    this.projectActive = !this.projectActive;
  }

  collapse(e) {
    e.preventDefault();
    this.collapsed = !this.collapsed;
  }

  edit(e) {
    e.preventDefault();
    this.isEdit = !this.isEdit;
    console.log(this.isEdit);
  }

  save($event: Blob) {
    console.log($event);
  }

}
