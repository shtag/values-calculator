import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Field } from './app.state';
import { Types } from 'src/assets/dictianary';

export const selectFieldsState = createFeatureSelector<{
  fields: Field[],
  currentType: Types,
  language: 'en' | 'ru'
}>('fields');

export const selectFields = createSelector(
  selectFieldsState,
  (fieldsState) => fieldsState.fields
);

export const selectCurrentType = createSelector(
  selectFieldsState,
  (fieldsState) => fieldsState.currentType
);

export const selectLanguage = createSelector(
  selectFieldsState,
  (fieldsState) => fieldsState.language
);