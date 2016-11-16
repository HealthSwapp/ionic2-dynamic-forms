import { Component, Input } from '@angular/core';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html'
})
export class DynamicFormComponent {
  @Input() fields: DynamicField<any>[] = [];

  constructor() {  }

}
