import { createAction, props } from '@ngrx/store';


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
  props<{ currentType: string }>()
);

export const updateFieldValue = createAction(
  '[Field] Update Field Value',
  props<{ id: number; value: string; valueType: string }>()
);

export const updateLanguage = createAction(
  '[Language] Update Field Value',
  props<{ language: 'ru' | 'en' }>()
);