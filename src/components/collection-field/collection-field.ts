import { Component, Input } from '@angular/core';
import { FormGroup, FormArray} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';
import { DynamicForm } from '../../providers/dynamic-form';

@Component({
  selector: 'collection-field',
  templateUrl: 'collection-field.html'
})
export class CollectionFieldComponent {
  @Input() field: DynamicField = {};
  @Input() form: FormGroup;

  constructor(
    public df: DynamicForm
    ) { }

  addToCollection = (fields: DynamicField[]) => {
    console.log('adding fields');

    let x = this.df.toFormGroup(fields, {});
    console.log(x);

    (<FormArray>this.form.controls[this.field.name]).push(x)
  }
}

