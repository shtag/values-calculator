
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, startWith } from 'rxjs';
import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { setCurrentType, updateLanguage } from 'src/app/state/state.actions';
import { selectCurrentType, selectLanguage } from 'src/app/state/state.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  currentType$: Observable<string>;

  constructor(private store: Store, private dictionary: DictionaryService) {
    this.items = [];
    this.language = 'en';
    this.currentType$ = this.store.select(selectCurrentType)
    this.currentType$.subscribe(type => this.currentType = type)
    this.dictionary.dictionary$.subscribe(dictionary => {
      this.items = [];
      Object.values(dictionary).forEach(el => {
        this.items.push(el.name)
      })
    })
    this.store.select(selectLanguage).subscribe(language => {
      this.language = language
    });
  }

  items: string[];

  language: 'en' | 'ru';

  currentType = 'area'

  form = new FormGroup({
    typeSelector: new FormControl()
  })

  changeType() {
    console.log(this.form.value);
    if (this.form.value.typeSelector) {
      this.store.dispatch(setCurrentType({ currentType: this.form.value.typeSelector }))
    }
  }

  changeLang() {
    if (this.language === 'en') {
      this.language = 'ru'
    } else {
      this.language = 'en'
    }
    this.store.dispatch(updateLanguage({ language: this.language }))
  }
}
