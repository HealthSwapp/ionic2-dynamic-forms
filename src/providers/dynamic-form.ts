import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { DynamicField } from '../models/dynamic-field';

@Injectable()
export class DynamicForm {

  constructor() {}

  toFormGroup(fields: DynamicField[]): FormGroup {
    let group: any = {};

    fields.forEach(field => {
      group[field.name] = field.required ? new FormControl(field.value || '', Validators.required)
                                              : new FormControl(field.value || '');
    });

    return new FormGroup(group);
  }

}
