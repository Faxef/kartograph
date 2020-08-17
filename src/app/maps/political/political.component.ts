import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-political-map',
  templateUrl: './political.component.html',
  styleUrls: ['./political.component.scss'],
})
export class PoliticalComponent implements OnInit {
  title = 'Политическая карта мира';

  activeMenu: boolean;
  activeInfo = false;

  isChecked: true;
  isEdit = false;

  legendActive: boolean;
  collapsed: boolean;
  information = [
    {name: 'Австралия и Океания', img: 'assets/img/Политическая карта мира/Информация/Австралия и Океания.png', checked: true},
    {name: 'Азия', img: 'assets/img/Политическая карта мира/Информация/Азия.png', checked: false},
    {name: 'Африка', img: 'assets/img/Политическая карта мира/Информация/Африка.png', checked: false},
    {name: 'Европа', img: 'assets/img/Политическая карта мира/Информация/Европа.png', checked: false},
    {name: 'Северная Америка', img: 'assets/img/Политическая карта мира/Информация/Северная Америка.png', checked: false},
    {name: 'Южная Америка', img: 'assets/img/Политическая карта мира/Информация/Южная Америка.png', checked: false},
  ];
  isCheckedId = this.information[0].name;
  layers = [
    {name: 'Названия государств', img: 'assets/img/Политическая карта мира/Страны.png'},
    {name: 'Столицы государств', img: 'assets/img/Политическая карта мира/Столицы.png'},
    {name: 'Города', img: 'assets/img/Политическая карта мира/Города.png'},
    {
      name: 'Границы государств', img: '', isDrop: [
        {
          name: 'геометрические',
          img: 'assets/img/Политическая карта мира/Границы государств/Геометрические_границы.png',
        },
        {
          name: 'гидрографические',
          img: 'assets/img/Политическая карта мира/Границы государств/Гидрографические границы.png',
        },
        {
          name: 'орографические',
          img: 'assets/img/Политическая карта мира/Границы государств/Орографические границы.png'
        },
        {name: 'прочие', img: 'assets/img/Политическая карта мира/Границы государств/Прочие границы.png'},
      ]
    },
    {name: 'Государства и страны', img: 'assets/img/Политическая карта мира/Государства и страны.png'},
    {
      name: 'Формы правления', img: '', isDrop: [
        {
          name: 'монархии', img: '', isDrop: [
            {
              name: 'абсолютные',
              img: 'assets/img/Политическая карта мира/Формы правления/Монархии/Абсолютные монархии.png',
            },
            {
              name: 'ограниченные',
              img: 'assets/img/Политическая карта мира/Формы правления/Монархии/Ограниченные монархии.png',
            },
          ]
        },
        {
          name: 'государства в составе Содружества',
          img: 'assets/img/Политическая карта мира/Формы правления/Государства в составе содружества.png'
        },
        {name: 'республики', img: 'assets/img/Политическая карта мира/Формы правления/Республики.png'},
        {
          name: 'территории (в т.ч территории с особым статусом)',
          img: 'assets/img/Политическая карта мира/Формы правления/Территории.png'
        },
      ]
    },
    {
      name: 'Формы политико-территориального устройства', img: '', isDrop: [
        {
          name: 'унитарные государства',
          img: 'assets/img/Политическая карта мира/Формы полит-территор. устройства/Унитарные государства.png',
        },
        {
          name: 'федеративные государства',
          img: 'assets/img/Политическая карта мира/Формы полит-территор. устройства/Федеративные государства.png',
        },
      ]
    },
    {name: 'Региональные и локальные конфликты', img: 'assets/img/Политическая карта мира/Конфликты.png'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  active(layer, $event) {
    if (layer.isDrop) {
      if (!layer.checked) {
        layer.isDrop.map(dropdown => {
          dropdown.checked = true;
          if (dropdown.isDrop) {
            if (dropdown.checked) {
              dropdown.isDrop.map(dropdownSecond => dropdownSecond.checked = true);
            }
          }
        });
      } else {
        layer.isDrop.map(dropdown => {
          dropdown.checked = false;
          if (dropdown.isDrop) {
            if (!dropdown.checked) {
              dropdown.isDrop.map(dropdownSecond => dropdownSecond.checked = false);
            }
          }
        });
      }
    }
  }

  legend(e) {
    e.preventDefault();
    this.legendActive = !this.legendActive;
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
    this.activeMenu = !this.activeMenu;
  }

  showInfo() {
    this.activeInfo = !this.activeInfo;
    console.log(this.activeInfo);
  }

  onChange(e) {
    this.information.map(layer => {
      if (layer.name === e.name) {
        e.checked = true;
        this.isChecked = e.checked;
        this.isCheckedId = e.name;
      } else {
        layer.checked = false;
      }
    });
  }
}
