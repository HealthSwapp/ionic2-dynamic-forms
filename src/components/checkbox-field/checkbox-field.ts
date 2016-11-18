import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'checkbox-field',
  templateUrl: 'checkbox-field.html'
})
export class CheckboxFieldComponent {
  @Input() field: DynamicField = {};
  @Input() form: FormGroup;

  constructor() { }

  get isValid() { return this.form.controls[this.field.name].valid; }
}

