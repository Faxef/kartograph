import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './frg.component.html',
  styleUrls: ['./frg.component.scss']
})
export class FrgComponent implements OnInit {
  // Заголовок
  title = 'Административно-территориальное устройство ФРГ';

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'Административные центры',
      img: 'assets/img/ФРГ/Административные центры.png',
    },
    {
      name: 'Границы федеративных образований',
      img: 'assets/img/ФРГ/Границы федерат образований.png',
    },
    {
      name: 'Названия федеративных образований',
      img: 'assets/img/ФРГ/Названия федерат образований.png',
    },
  ];
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
