export class DynamicField{
  name?: string;
  type?: string;
  label?: string;
  required?: boolean;
  error?: string;
  options?: {key: string, value: string}[];
  children?: DynamicField[]; 
}