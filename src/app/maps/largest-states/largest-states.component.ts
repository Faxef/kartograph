import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './largest-states.component.html',
  styleUrls: ['./largest-states.component.scss']
})
export class LargestStatesComponent implements OnInit {
  // Заголовок
  title = 'Крупнейшие государства мира';

  isChecked;
  isCheckedId;

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {name: 'По территории', img: 'assets/img/Крупнейшие страны мира/Крупнейшие страны мира по площади.png'},
    {name: 'По численности', img: 'assets/img/Крупнейшие страны мира/Крупнейшие страны мира по численности.png'},
  ];
  isEdit: boolean;

  constructor() {
  }

  ngOnInit(): void {

  }

  projector(e) {
    e.preventDefault();
    // this.projectActive = !this.projectActive;
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
    this.isChecked = !this.isChecked;
    this.isCheckedId = e.target.id;
  }
}
