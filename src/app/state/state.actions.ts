import { createAction, props } from '@ngrx/store';
import { Types } from 'src/assets/dictianary';


export const addField = createAction(
  '[Field] Add Field',
  props<{ id: number; value: string; valueType: string }>()
);

export const deleteField = createAction(
  '[Field] Delete Field',
  props<{ id: number }>()
);

export const setCurrentType = createAction(
  '[Field] Set Current Type',
  props<{ currentType: Types }>()
);

export const updateFieldValue = createAction(
  '[Field] Update Field Value',
  props<{ id: number; value: string; valueType: string }>()
);

export const updateLanguage = createAction(
  '[Language] Update Field Value',
  props<{ language: 'ru' | 'en' }>()
);