import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './largest-states.component.html',
  styleUrls: ['./largest-states.component.scss']
})
export class LargestStatesComponent implements OnInit {
  // Заголовок
  title = 'Крупнейшие государства мира';

  isChecked: true;

  active = false;

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'По территории',
      img: 'assets/img/Крупнейшие страны мира/Крупнейшие страны мира по площади.png',
      legend: 'assets/img/Крупнейшие страны мира/Легенда-территория.png',
      checked: true
    },
    {
      name: 'По численности населения',
      img: 'assets/img/Крупнейшие страны мира/Крупнейшие страны мира по численности.png',
      legend: 'assets/img/Крупнейшие страны мира/Легенда-численность.png',
      checked: false
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
  }

  save($event: Blob) {
    console.log($event);
  }

  onChange(e) {
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
