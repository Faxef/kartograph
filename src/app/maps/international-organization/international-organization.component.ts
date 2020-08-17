import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-largest-states',
  templateUrl: './international-organization.component.html',
  styleUrls: ['./international-organization.component.scss']
})
export class InternationalOrganizationComponent implements OnInit {
  // Заголовок
  title = 'Политические и экономические организации';

  isChecked;

  active = false;

  projectActive: boolean;
  collapsed: boolean;

  // Массив слоев
  layers = [
    {
      name: 'Экономические организации',
      title: true
    },
    {
      name: '«Большая семерка»',
      img: 'assets/img/Политические и экономические организации/Экономические/Большая семерка.png',
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
      checked: true
    },
    {
      name: '«Большая двадцатка»',
      img: 'assets/img/Политические и экономические организации/Экономические/Большая двадцатка.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Группа стран БРИКС',
      img: 'assets/img/Политические и экономические организации/Экономические/БРИКС.png', checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Европейский Союз (ЕС)',
      img: 'assets/img/Политические и экономические организации/Экономические/ЕС.png', checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Организация экономического сотрудничества и развития (ОЭСР)',
      img: 'assets/img/Политические и экономические организации/Экономические/ОЭСР.png', checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Европейская ассоциация свободной торговли (ЕАСТ) ',
      img: 'assets/img/Политические и экономические организации/Экономические/ЕАСТ.png', checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Евразийский экономический союз (ЕАЭС)',
      img: 'assets/img/Политические и экономические организации/Экономические/ЕАЭС.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Азиатско-Тихоокеанское экономическое сотрудничество (АТЭС)',
      img: 'assets/img/Политические и экономические организации/Экономические/АТЭС.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Организация экономического сотрудничества (ОЭС)',
      img: 'assets/img/Политические и экономические организации/Экономические/ОЭС.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Ассоциация регионального сотрудничества Южной Азии (СААРК)',
      img: 'assets/img/Политические и экономические организации/Экономические/СААРК.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Латиноамериканская ассоциация интеграции (ЛАИ)',
      img: 'assets/img/Политические и экономические организации/Экономические/ЛАИ.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Карибское сообщество (КАРИКОМ)',
      img: 'assets/img/Политические и экономические организации/Экономические/КАРИКОМ.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Южноамериканский общий рынок (МЕРКОСУР)',
      img: 'assets/img/Политические и экономические организации/Экономические/МЕРКОСУР.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Североамериканская зона свободной торговли (НАФТА)',
      img: 'assets/img/Политические и экономические организации/Экономические/НАФТА.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Экономическое сообщество стран Западной Африки (ЭКОВАС)',
      img: 'assets/img/Политические и экономические организации/Экономические/ЭКОВАС.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Общий рынок Восточной и Южной Африки (КОМЕСА)',
      img: 'assets/img/Политические и экономические организации/Экономические/КОМЕСА.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Экономическое сообщество стран Центральной Африки (ЭКОЦАС)',
      img: 'assets/img/Политические и экономические организации/Экономические/ЭКОЦАС.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Организация стран-экспортеров нефти (ОПЕК)',
      img: 'assets/img/Политические и экономические организации/Экономические/ОПЕК.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Организация арабских стран-экспортеров нефти (ОАПЕК)',
      img: 'assets/img/Политические и экономические организации/Экономические/ОАПЕК.png',
      checked: false,
      legend: 'assets/img/Политические и экономические организации/Экономические/Легенда.png',
    },
    {
      name: 'Политические организации',
      title: true
    },
    {
      name: 'Организация Объединённых Наций (ООН)',
      img: 'assets/img/Политические и экономические организации/Политические/ООН.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Движение неприсоединения',
      img: 'assets/img/Политические и экономические организации/Политические/Движение пеприсоединения.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Организация Североатлантического договора (НАТО)',
      img: 'assets/img/Политические и экономические организации/Политические/НАТО.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Организация договора о коллективной безопасности (ОДКБ)',
      img: 'assets/img/Политические и экономические организации/Политические/ОДКБ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Шанхайская организация сотрудничества (ШОС)',
      img: 'assets/img/Политические и экономические организации/Политические/ШОС.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Совет Европы (СЕ)',
      img: 'assets/img/Политические и экономические организации/Политические/СЕ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Организация по безопасности и сотрудничеству в Европе (ОБСЕ)',
      img: 'assets/img/Политические и экономические организации/Политические/ОБСЕ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Содружество независимых государств (СНГ)',
      img: 'assets/img/Политические и экономические организации/Политические/СНГ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Ассоциация государств Юго-Восточной Азии (АСЕАН)',
      img: 'assets/img/Политические и экономические организации/Политические/АСЕАН.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Тихоокеанское сообщество',
      img: 'assets/img/Политические и экономические организации/Политические/Тихоокеанское сообщество.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Лига арабских государств (ЛАГ)',
      img: 'assets/img/Политические и экономические организации/Политические/ЛАГ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Организация исламского сотрудничества (ОИС)',
      img: 'assets/img/Политические и экономические организации/Политические/ОИС.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Организация центральноамериканских государств (ОЦАГ)',
      img: 'assets/img/Политические и экономические организации/Политические/ОЦАГ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Ассоциация Карибских государств (АКГ)',
      img: 'assets/img/Политические и экономические организации/Политические/АКГ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Союз южноамериканских наций (УНАСУР)',
      img: 'assets/img/Политические и экономические организации/Политические/УНАСУР.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Организация американских государств (ОАГ)',
      img: 'assets/img/Политические и экономические организации/Политические/ОАГ.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
    {
      name: 'Африканский Союз (АС)',
      img: 'assets/img/Политические и экономические организации/Политические/АС.png',
      legend: 'assets/img/Политические и экономические организации/Политические/Легенда.png',
      checked: false
    },
  ];
  isCheckedId = this.layers[1].name;
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
