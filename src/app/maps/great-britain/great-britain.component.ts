import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './great-britain.component.html',
  styleUrls: ['./great-britain.component.scss']
})
export class GreatBritainComponent implements OnInit {
  // Заголовок
  title = 'Административно-территориальное устройство Великобритани';

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'Административные центры',
      img: 'assets/img/Великобритания/Админ центры.png',
    },
    {
      name: 'Границы федеративных образований',
      img: 'assets/img/Великобритания/Границы федерат образований.png',
    },
    {
      name: 'Названия федеративных образований',
      img: 'assets/img/Великобритания/Названия федерат образований.png',
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
