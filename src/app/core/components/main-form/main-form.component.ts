import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Field } from 'src/app/state/app.state';
import { addField, deleteField, updateFieldValue } from 'src/app/state/state.actions';
import { selectCurrentType, selectFields } from 'src/app/state/state.selectors';
import { DictionaryService } from '../../services/dictionary.service';
import { GeneralDictionaryLanguage, Types } from 'src/assets/dictianary';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnDestroy {

  constructor(
    private store: Store,
    private dictionaryService: DictionaryService,
  ) {
    this.items$.subscribe(item => {
      this.items = [];
      this.form = new FormGroup({});
      item.forEach(field => {
        this.items.push(field)
        this.form.addControl(`value_${field.id}`, new FormControl(field.value))
        this.form.addControl(`type_${field.id}`, new FormControl(field.valueType))
      })
    })
    this.generalDictionary$ = this.dictionaryService.dictionaryGeneral$
    this.dictionaryService.dictionary$.subscribe(dictionary => {
      this.currentType$.subscribe((type) => {
        this.types = [];
        Object.entries(dictionary[type].values).forEach(type => {
          this.types.push({ name: type[1], value: type[0] });
        })
        this.types.sort((a, b) => {
          return (a.name >= b.name) ? 1 : -1;
        })
      })
    })
  }

  private currentType$: Observable<Types> = this.store.select(selectCurrentType);

  items$: Observable<Field[]> = this.store.select(selectFields);

  items: Field[] = [];

  generalDictionary$: Observable<GeneralDictionaryLanguage>;

  types: { value: string; name: string }[] = [];

  form: FormGroup = new FormGroup({});

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
    console.log('main form:', this.form.value)
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
