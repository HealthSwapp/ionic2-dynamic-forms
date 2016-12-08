import { Injectable } from '@angular/core';

@Injectable()
export class SchemaForm {
  fields = `[
    {name: 'name', label: 'Name', type: 'text', error: 'Name is required', required: true},
    {name: 'email', label: 'Email', type: 'email', error: 'Email is required', required: true},
    {name: 'address', label: 'Address', type: 'checkbox', children_conditional: true, children: [
      {name: 'city', label: 'City', type: 'text', error: 'City is required', required: true},
      {name: 'province', label: 'Province', type: 'text', required: false},
      {name: 'type', label: 'Type', type: 'select', required: false, options: [
        {key: 'Residence', value: 'r'},
        {key: 'Office', value: 'o'},
        {key: 'Cottage', value: 'c'},
      ]},
      ]
    },
    {name: 'sex', label: 'Sex', type: 'select', error: 'Sex is required', required: true, options: [
      {key: 'Male', value: 'm'},
      {key: 'Female', value: 'f'}
    ]},
    {name: 'question_1', label: 'Was this properly cleaned?', type: 'segment', required: false, options: [
      {key: 'Yes', value: 'y'},
      {key: 'No', value: 'no'},
      {key: 'N/A', value: 'n/a'}
    ]},
    ]`;

  constructor() {}

}
