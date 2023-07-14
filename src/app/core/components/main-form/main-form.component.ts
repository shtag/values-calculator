import { Component, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Field } from 'src/app/state/app.state';
import { addField, deleteField } from 'src/app/state/state.actions';
import { selectCurrentType, selectFields } from 'src/app/state/state.selectors';
import { DictionaryService } from '../../services/dictionary.service';
import { GeneralDictionaryLanguage, Types } from 'src/assets/dictianary';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnDestroy {

  itemsSubscription: Subscription;

  dictionarySubscription: Subscription;

  private currentType$: Observable<Types> = this.store.select(selectCurrentType);

  items$: Observable<Field[]> = this.store.select(selectFields);

  items: Field[] = [];

  generalDictionary$: Observable<GeneralDictionaryLanguage>;

  types: { value: string; name: string }[] = [];

  form: FormGroup = new FormGroup({});

  focusedElementId = 1

  lastChange = 0;

  constructor(
    private store: Store,
    private dictionaryService: DictionaryService,
    private converter: ConverterService,
    private elementRef: ElementRef
  ) {
    this.itemsSubscription = this.items$.subscribe(item => {
      this.items = [];
      this.form = new FormGroup({});
      item.forEach(field => {
        if (!this.items.find(i => i.id === field.id)) {
          this.items.push(field)
          this.form.addControl(`value_${field.id}`, new FormControl(field.value))
          this.form.addControl(`type_${field.id}`, new FormControl(field.valueType))
        }
      })
    })
    this.generalDictionary$ = this.dictionaryService.dictionaryGeneral$
    this.dictionarySubscription = this.dictionaryService.dictionary$.subscribe(dictionary => {
      this.currentType$.subscribe((type) => {
        this.types = [];
        if (type) {
          Object.entries(dictionary[type]?.values).forEach(type => {
            this.types.push({ name: type[1], value: type[0] });
          })
        }
        this.types.sort((a, b) => {
          return (a.name >= b.name) ? 1 : -1;
        })
      })
    })
  }



  addField() {
    const id = this.items.sort().reverse()[0].id + 1;
    this.store.dispatch(addField({ id: id, value: '', valueType: '' }))
  }

  deleteField(id: number) {
    this.store.dispatch(deleteField({ id: id }))
  }

  changeField(id: number) {
    this.lastChange = id;
    const val = this.form.value[`value_${id}`];
    if (!val) return
    const regex = /^[0-9]*[.]?[0-9]+$/;
    if (!regex.test(val)) {
      return
    }
    if (!this.form.value[`type_${id}`]) {
      return
    }
    this.focusedElementId = id;
    const value = this.form.value[`value_${id}`] as string;
    const type = this.form.value[`type_${id}`] as string;
    const field = { id: id, value: value, valueType: type }
    this.converter.convert(field, this.form);
    setTimeout(() => {
      const focusedElement = this.elementRef.nativeElement.querySelector(`#value_${this.focusedElementId}`);
      if (focusedElement) {
        focusedElement.focus();
      }
    });

  }

  changeQuantity() {
    this.changeField(this.lastChange)
  }

  logger() {
    const types: { [id: string]: { value?: string, type?: string } } = {}
    const arr = Object.entries(this.form.value);
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
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.itemsSubscription.unsubscribe();
    this.dictionarySubscription.unsubscribe()
  }
}
