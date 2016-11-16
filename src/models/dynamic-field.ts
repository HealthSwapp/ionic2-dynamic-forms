export class DynamicField<T>{
  value: T;
  key: string;
  
  constructor(options: {
      value?: T,
      key?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
  }
}