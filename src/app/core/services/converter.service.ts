import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { updateFieldValue } from 'src/app/state/state.actions';
import { selectCurrentType } from 'src/app/state/state.selectors';
import { coefficients, coefficientsToCI } from 'src/assets/convertion-coefficients';
import { Types } from 'src/assets/dictianary';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private store: Store) {
    this.currentType$ = this.store.select(selectCurrentType).subscribe(type => this.type = type)
  }

  currentType$: Subscription;

  type: Types = '';

  convert(
    fieldData: { id: number; value: string; valueType: string },
    form: FormGroup
  ) {
    const values = form.value
    const types: { [id: string]: { value: string, type: string } } = {}
    const arr = Object.entries(values);
    arr.forEach(el => {
      const id = el[0].split('_')[1];
      const type = el[0].split('_')[0];
      const bol = Object.prototype.hasOwnProperty.call(types, id);
      if (!bol) {
        types[id] = {
          value: '',
          type: ''
        }
      }
      if (type === 'type') {
        types[id].type = el[1] as string;
      }
      if (type === 'value') {
        types[id].value = el[1] as string;
      }
    })
    const result = [];
    const coefToCI = coefficientsToCI[this.type];
    const coef = coefficients[this.type];
    if (coefToCI && coef) {
      const valueCI = +fieldData.value * coefToCI[fieldData.valueType]
      console.log('CI', valueCI)
      for (const item in types) {
        console.log(types[item])
        const id = types[item]
        console.log('id', id)
        if (id) {
          const value = (valueCI * coef[id.type])
          const res = {
            type: types[item].type as string,
            value: Number(value.toFixed(3)).toString(),
            id: item
          }
          if (+item === fieldData.id) {

            this.store.dispatch(updateFieldValue({ id: +item, value: fieldData.value, valueType: res.type }))
          } else {

            this.store.dispatch(updateFieldValue({ id: +item, value: res.value, valueType: res.type }))
          }
          result.push(res)
        }
      }
    }
  }

  convertTemperature() {
    console.log('temp')
  }
}
