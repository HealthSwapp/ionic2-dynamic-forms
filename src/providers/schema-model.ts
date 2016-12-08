import { Injectable } from "@angular/core";

@Injectable()
export class SchemaModel {
  model = `{
    "name": "Elie",
    "email": "elie@something.com",
    "address": true,
    "address_array": [
      {
        "city": "Toronto",
        "province": "Ontario",
        "type": "c"
      },
      {
        "city": "Ottawa",
        "province": "Ontario"
      }
    ],
    "sex": "m"
  }`;

  constructor() {}

}
