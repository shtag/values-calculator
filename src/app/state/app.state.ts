import { Types } from "src/assets/dictianary";

export interface Field {
  id: number;
  value: string;
  valueType: string;
}

export interface AppState {
  currentType: Types;
  language: 'ru' | 'en';
  fields: Field[]
}

export const initialState: AppState = {
  fields: [
    {
      id: 1,
      value: '',
      valueType: ''
    },
    {
      id: 2,
      value: '',
      valueType: ''
    },
  ],
  language: 'en',
  currentType: 'length'
};