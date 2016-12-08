import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { NavController } from 'ionic-angular';

import { DynamicForm } from '../../providers/dynamic-form';
import { SchemaForm } from '../../providers/schema-form';
import { SchemaModel } from '../../providers/schema-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public df: DynamicForm,
    public sf: SchemaForm,
    public sm: SchemaModel
    ) { }

  ngOnInit() {
    // this.form = this.df.toFormGroup(this.sf.fields, this.sm.model);
  }

}
