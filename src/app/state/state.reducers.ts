import { createReducer, on } from '@ngrx/store';
import { addField, deleteField, setCurrentType, updateFieldValue, updateLanguage } from './state.actions';
import { AppState, initialState } from './app.state';

export const AppReducer = createReducer(
  initialState,
  on(addField, (state, field): AppState => ({ ...state, fields: [...state.fields, field] })),
  on(deleteField, (state, { id }): AppState => ({ ...state, fields: state.fields.filter(field => field.id !== id) })),
  on(setCurrentType, (state, { currentType }): AppState => ({ ...state, currentType })),
  on(updateFieldValue, (state, { id, value, valueType }): AppState => ({
    ...state,
    fields: state.fields.map((field) =>
      field.id === id ? { ...field, value, valueType } : field
    ),
  })),
  on(updateLanguage, (state, { language }): AppState => ({
    ...state,
    language: language
  }))
);