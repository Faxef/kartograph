import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './countries-types.component.html',
  styleUrls: ['./countries-types.component.scss']
})
export class CountriesTypesComponent implements OnInit {
  // Заголовок
  title = 'Типы стран';

  isChecked;

  active = false;

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'Уровень человеческого развития',
      img: 'assets/img/Типы стран/Уровень человеческого развития/Уровень человеческого развития.png',
      legend: 'assets/img/Типы стран/Уровень человеческого развития/Легенда.png', checked: true
    },
    {
      name: 'Валовой внутренний продукт',
      img: 'assets/img/Типы стран/Валовой внутренний продукт/Валовой внутренний продукт.png',
      legend: 'assets/img/Типы стран/Валовой внутренний продукт/Легенда.png', checked: false
    },
    {
      name: 'Внутриконтинентальные страны мира',
      img: 'assets/img/Типы стран/Внутриконтинентальные страны мира/Внутриконтинентальные страны мира.png',
      legend: 'assets/img/Типы стран/Внутриконтинентальные страны мира/Легенда.png', checked: false
    },
  ];
  isCheckedId = this.layers[0].name;
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

  onChange(e) {
    console.log(e);
    this.layers.map(layer => {
      if (layer.name === e.name) {
        e.checked = true;
        this.isChecked = e.checked;
        this.isCheckedId = e.name;
      } else {
        layer.checked = false;
      }
    });
  }

  show() {
    this.active = !this.active;
  }
}
