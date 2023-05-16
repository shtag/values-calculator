import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Field } from './app.state';

export const selectFieldsState = createFeatureSelector<{
  fields: Field[],
  currentType: string,
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