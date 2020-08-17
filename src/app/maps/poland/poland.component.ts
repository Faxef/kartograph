import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './poland.component.html',
  styleUrls: ['./poland.component.scss']
})
export class PolandComponent implements OnInit {
  // Заголовок
  title = 'Административно-территориальное устройство Польши';

  active = false;

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'Административные центры',
      img: 'assets/img/Польша/Админ центры.png',
    },
    {
      name: 'Границы административных образований',
      img: 'assets/img/Польша/Границы федерат образований.png',
    },
    {
      name: 'Названия административных образований',
      img: 'assets/img/Польша/Названия федерат образований.png',
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

  show() {
    this.active = !this.active;
  }
}
