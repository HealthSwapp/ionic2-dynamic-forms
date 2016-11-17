import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

import { DynamicField } from '../models/dynamic-field';

@Injectable()
export class DynamicForm {

  constructor() {}

  toFormGroup = (fields: DynamicField[]): FormGroup => {
    let group: any = {};

    fields.forEach(field => {
      if (!field.children || !field.children.length){
        group[field.name] = this.toFormControl(field);
      }else{
        group[field.name] = new FormArray([this.toFormGroup(field.children)]);
      }
    });

    return new FormGroup(group);
  }

  toFormControl = (field: DynamicField): FormControl => {
    return field.required ? new FormControl(field.value || '', Validators.required)
                                              : new FormControl(field.value || '');
  }

}
