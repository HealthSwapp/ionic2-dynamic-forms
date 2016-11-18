import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'dynamic-field',
  templateUrl: 'dynamic-field.html'
})
export class DynamicFieldComponent {
  @Input() field: DynamicField = {};
  @Input() form: FormGroup;

  constructor() { }

  get showError() { 
    return !this.form.controls[this.field.name].valid && (this.form.touched || this.form.controls[this.field.name].touched) 
  }
}
