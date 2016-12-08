import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FormPage } from '../form/form';

import { SchemaForm } from '../../providers/schema-form';
import { SchemaModel } from '../../providers/schema-model';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  schemaError: string = '';
  modelError: string = '';

  constructor(
    public navCtrl: NavController,
    public sf: SchemaForm,
    public sm: SchemaModel
    ) { }

    showForm = () => {
      let fields: DynamicField[];
      let model;

      try {
        fields = JSON.parse(this.sf.fields);
        this.schemaError = ''
      }
      catch(err) {
          this.schemaError = 'Invalid SchemaForm'
      }

      try {
        model = JSON.parse(this.sm.model);
        this.modelError = ''
      }
      catch(err) {
          this.modelError = 'Invalid Model'
      }

      if (this.modelError === '' && this.schemaError == ''){
        this.navCtrl.push(FormPage, {fields, model})
      }
    }

}
