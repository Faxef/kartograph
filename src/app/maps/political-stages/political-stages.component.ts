import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './political-stages.component.html',
  styleUrls: ['./political-stages.component.scss']
})
export class PoliticalStagesComponent implements OnInit {
  // Заголовок
  title = 'Этапы формирования политической карты мира';

  isChecked;
  isCheckedId;

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'Цивилизации мира',
      img: 'assets/img/Этапы формирования политической карты мира/Цивилизации мира/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Цивилизации мира/Легенда.png'
    },
    {
      name: 'Мир в эпоху великих географических открытий',
      img: 'assets/img/Этапы формирования политической карты мира/Мир в эпоху великих географических открытий/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Мир в эпоху великих географических открытий/Легенда.png',
      isDrop: {
        name: 'Конкистадоры',
        img: 'assets/img/Этапы формирования политической карты мира/Мир в эпоху великих географических открытий/Конкистадоры.png'
      }
    },
    {
      name: 'Мир в начале средних веков',
      img: 'assets/img/Этапы формирования политической карты мира/Мир в начале средних веков/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Мир в начале средних веков/Легенда.png'
    },
    {
      name: 'Мир к 1914 г',
      img: 'assets/img/Этапы формирования политической карты мира/Мир к 1914 г/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Мир к 1914 г/Легенда.png'
    },
    {
      name: 'Мир в 1991 г',
      img: 'assets/img/Этапы формирования политической карты мира/Мир в 1991 г/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Мир в 1991 г/Легенда.png'
    },
    {
      name: 'Мир в 1945-1949 гг',
      img: 'assets/img/Этапы формирования политической карты мира/Мир в 1945-1949 гг/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Мир в 1945-1949 гг/Легенда.png'
    },
    {
      name: 'Политическая карта мира (Мир в начале XXI века)',
      img: 'assets/img/Этапы формирования политической карты мира/Политическая карта мира (Мир в начале XXI века)/Основа.png',
      legend: 'assets/img/Этапы формирования политической карты мира/Политическая карта мира (Мир в начале XXI века)/Легенда.png'
    },
  ];
  isEdit: boolean;
  conqstadorsActive: boolean;

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
    this.isChecked = !this.isChecked;
    this.isCheckedId = e.target.id;
  }

  conqstadors() {
    this.conqstadorsActive = !this.conqstadorsActive;
  }
}
