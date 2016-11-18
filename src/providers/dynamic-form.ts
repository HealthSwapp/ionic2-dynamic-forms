import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

import { DynamicField } from '../models/dynamic-field';

@Injectable()
export class DynamicForm {

  constructor() {}

  toFormGroup = (fields: DynamicField[], model): FormGroup => {
    let group: any = {};

    fields.forEach(field => {
      if (field.type){
        group[field.name] = this.toFormControl(field, model[field.name]);
      }

      if (field.children && field.children.length){
        const key = `${field.name}_array`
        const model_array = model[key] || [];
        group[key] = new FormArray(
          model_array.map(subModel => {
            return this.toFormGroup(field.children, subModel) 
          })
          );
      }
    });

    return new FormGroup(group);
  }

  toFormControl = (field: DynamicField, value): FormControl => {
    return field.required ? new FormControl(value || '', Validators.required)
                                              : new FormControl(value || '');
  }

}
