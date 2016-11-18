import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

import { DynamicField } from '../models/dynamic-field';

@Injectable()
export class DynamicForm {

  constructor() {}

  toFormGroup = (fields: DynamicField[], model): FormGroup => {
    let group: any = {};

    fields.forEach(field => {
      if (!field.children || !field.children.length){
        group[field.name] = this.toFormControl(field, model[field.name]);
      }else{
        group[field.name] = new FormArray(
          model[field.name].map(subModel => {
            return this.toFormGroup(field.children, subModel) 
          })
          );
      }
    });

    let x = new FormGroup(group);

    console.log('xxxxxxx');
    console.log(x); 

    return x;
  }

  toFormControl = (field: DynamicField, value): FormControl => {
    return field.required ? new FormControl(value || '', Validators.required)
                                              : new FormControl(value || '');
  }

}
