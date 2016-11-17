import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'input-field',
  templateUrl: 'input-field.html'
})
export class InputFieldComponent {
  @Input() field: DynamicField = {};
  @Input() form: FormGroup;

  constructor() { }

  get isValid() { return this.form.controls[this.field.name].valid; }
}

