export interface Field {
  id: number;
  value: string;
  valueType: string;
}

export interface AppState {
  currentType: string;
  language: 'ru' | 'en';
  fields: Field[]
}

export const initialState: AppState = {
  fields: [
    {
      id: 1,
      value: 'one',
      valueType: '1'
    },
    {
      id: 2,
      value: 'two',
      valueType: '2'
    },
  ],
  language: 'en',
  currentType: 'length'
};