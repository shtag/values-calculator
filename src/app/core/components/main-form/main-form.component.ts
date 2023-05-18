import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/state/app.state';
import { addField, deleteField, updateFieldValue } from 'src/app/state/state.actions';
import { selectFields } from 'src/app/state/state.selectors';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnDestroy {

  constructor(private store: Store) {
    this.types = [];
    this.form = new FormGroup({});
    this.items = []
    this.items$ = this.store.select(selectFields)
    this.items$.subscribe(item => {
      this.items = [];
      this.form = new FormGroup({});
      item.forEach(field => {
        this.items.push(field)
        this.form.addControl(`value_${field.id}`, new FormControl(field.value))
        this.form.addControl(`type_${field.id}`, new FormControl(field.valueType))
      })
    })
  }

  items$: Observable<Field[]>

  items: Field[];

  types: string[];

  form: FormGroup;

  addField() {
    const id = this.items.sort().reverse()[0].id + 1;
    this.store.dispatch(addField({ id: id, value: '', valueType: '' }))
  }

  deleteField(id: number) {
    this.store.dispatch(deleteField({ id: id }))
  }

  changeField(id: number) {
    const value = this.form.value[`value_${id}`];
    const type = this.form.value[`type_${id}`];
    this.store.dispatch(updateFieldValue({ id: id, value: value, valueType: type }))
  }

  logger() {
    console.log('logger');
    console.log(this.form.value)
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
