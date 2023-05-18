import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { GeneralDictionaryLanguage, LanguageDictionary, generalDictionary, quantityDictionary } from 'src/assets/dictianary';
import { selectLanguage } from 'src/app/state/state.selectors';
import { BehaviorSubject } from 'rxjs';
import { updateLanguage } from 'src/app/state/state.actions';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor(private store: Store) {
    this.loadLanguage();
    /// set initial value
    this.dictionary$ = new BehaviorSubject(quantityDictionary.en);
    this.dictionaryGeneral$ = new BehaviorSubject(generalDictionary.en);
    this.language$ = new BehaviorSubject<'ru' | 'en'>('en');
    ///
    this.store.select(selectLanguage).subscribe(language => {
      this.language$.next(language);
      this.dictionary$.next(quantityDictionary[language]);
      this.dictionaryGeneral$.next(generalDictionary[language]);
    });
  }

  language$: BehaviorSubject<'ru' | 'en'>;

  dictionary$: BehaviorSubject<LanguageDictionary>;

  dictionaryGeneral$: BehaviorSubject<GeneralDictionaryLanguage>;

  loadLanguage() {
    const initialLanguage = 'en';
    let storageLang = localStorage.getItem('language') as 'ru' | 'en' | null;
    if (!storageLang) {
      storageLang = initialLanguage;
    }
    this.language$ = new BehaviorSubject<'ru' | 'en'>(storageLang);
    this.store.dispatch(updateLanguage({ language: storageLang }))
  }
}
