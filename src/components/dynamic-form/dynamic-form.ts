import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html'
})
export class DynamicFormComponent {
  @Input() fields: DynamicField[] = [];
  @Input() form: FormGroup;

  constructor() {  }

  submitForm = () => {
    console.log(this.form.value)
  }

}
