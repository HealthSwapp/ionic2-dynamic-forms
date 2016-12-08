import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { FormGroup} from '@angular/forms';
import { DynamicForm } from '../../providers/dynamic-form';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage implements OnInit {
  form: FormGroup;
  fields: DynamicField[] = [];
  model = {};

  constructor(
    public df: DynamicForm,
    public params: NavParams
    ) {
      this.fields = this.params.get('fields');
      this.model = this.params.get('model');
  }

  ngOnInit() {
    this.form = this.df.toFormGroup(this.fields, this.model);
  }

}
