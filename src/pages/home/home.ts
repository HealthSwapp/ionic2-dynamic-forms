import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { NavController } from 'ionic-angular';

import { DynamicField } from '../../models/dynamic-field';
import { DynamicForm } from '../../providers/dynamic-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  fields: DynamicField[] = [
    {name: 'name', label: 'Name', type: 'text', error: 'Name is required', required: true},
    {name: 'email', label: 'Email', type: 'email', error: 'Email is required', required: true},
    {name: 'address', label: 'Address', type: 'checkbox', children_conditional: true, children: [
      {name: 'city', label: 'City', type: 'text', error: 'City is required', required: true},
      {name: 'province', label: 'Province', type: 'text', required: false}
      ]
    }
    ];

  model = {
    name: 'Elie',
    email: 'elie@something.com',
    address: true,
    address_array: [
      {
        city: 'Toronto',
        province: 'Ontario'
      },
      {
        city: 'Ottawa',
        province: 'Ontario'
      }
    ]
  };
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public df: DynamicForm
    ) { }

  ngOnInit() {
    this.form = this.df.toFormGroup(this.fields, this.model);
  }

}
