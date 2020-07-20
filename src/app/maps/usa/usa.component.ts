import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.scss']
})
export class UsaComponent implements OnInit {
  // Заголовок
  title = 'Административно-территориальное устройство США';

  projectActive: boolean;
  collapsed: boolean;
  conqstadorsActive: boolean;
  // Массив слоев
  layers = [
    {
      name: 'Административные центры',
      img: 'assets/img/США/Административные центры.png',
    },
    {
      name: 'Границы федеративных образований',
      img: 'assets/img/США/Границы федерат образований.png',
    },
    {
      name: 'Названия федеративных образований',
      img: 'assets/img/США/Названия федерат образований.png',
    },
  ];
  conqustador = {
    name: 'Конкистадоры',
    img: 'assets/img/Этапы формирования политической карты мира/Мир в эпоху великих географических открытий/Конкистадоры.png',
    checked: false
  };
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
