import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { NavController } from 'ionic-angular';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  fields: DynamicField[] = [
    {name: 'name', label: 'Name', type: 'text', error: 'Name is required', required: true, value: 'Elie'},
    {name: 'email', label: 'Email', type: 'email', error: 'Email is required', required: true, value: 'elie@something.com'}
    ];
  form: FormGroup;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    let group: any = {};

    this.fields.forEach(field => {
      group[field.name] = field.required ? new FormControl(field.value || '', Validators.required)
                                              : new FormControl(field.value || '');
    });

    this.form = new FormGroup(group);
  }

}
