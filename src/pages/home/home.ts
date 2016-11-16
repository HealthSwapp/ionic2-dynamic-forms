import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fields: DynamicField<any>[] = [
    { value: 'Value 1', key: 'key1' },
    { value: 'Value 2', key: 'key2' },
    { value: 'Value 3', key: 'key3' }
  ];

  constructor(public navCtrl: NavController) {
  }

}
