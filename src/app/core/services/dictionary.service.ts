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
    this.store.select(selectLanguage).subscribe(language => {
      this.language$.next(language);
      this.dictionary$.next(quantityDictionary[language]);
      this.dictionaryGeneral$.next(generalDictionary[language]);
    });
  }

  language$: BehaviorSubject<'ru' | 'en'> = new BehaviorSubject<'ru' | 'en'>('en');

  dictionary$: BehaviorSubject<LanguageDictionary> = new BehaviorSubject(quantityDictionary.en);

  dictionaryGeneral$: BehaviorSubject<GeneralDictionaryLanguage> = new BehaviorSubject(generalDictionary.en);

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
