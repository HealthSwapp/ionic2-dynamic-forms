import { Component, Input } from '@angular/core';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'dynamic-field',
  templateUrl: 'dynamic-field.html'
})
export class DynamicFieldComponent {
  @Input() field: DynamicField<any> = new DynamicField({});

  constructor() { }
}
