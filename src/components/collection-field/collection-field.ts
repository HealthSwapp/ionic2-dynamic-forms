import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { DynamicField } from '../../models/dynamic-field';

@Component({
  selector: 'collection-field',
  templateUrl: 'collection-field.html'
})
export class CollectionFieldComponent {
  @Input() field: DynamicField = {};
  @Input() form: FormGroup;
}

