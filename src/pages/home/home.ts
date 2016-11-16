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
    {name: 'name', label: 'Name', type: 'text', error: 'Name is required', required: true, value: 'Elie'},
    {name: 'email', label: 'Email', type: 'email', error: 'Email is required', required: true, value: 'elie@something.com'}
    ];
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public df: DynamicForm
    ) { }

  ngOnInit() {
    this.form = this.df.toFormGroup(this.fields);
  }

}
