import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field';

@Component({
  selector: 'checkbox-field',
  templateUrl: 'checkbox-field.html'
})
export class CheckboxFieldComponent extends DynamicFieldComponent {
  @Input() field: DynamicField = {};
  @Input() form: FormGroup;
  
  constructor() {
    super()
   }
}

