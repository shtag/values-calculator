import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Dictionary, GeneralDictionary, GeneralDictionaryLanguage, LanguageDictionary, generalDictionary, quantityDictionary } from 'src/assets/dictianary';
import { selectLanguage } from 'src/app/state/state.selectors';
import { BehaviorSubject, Subject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private store: Store) {
    this.dictionary$ = new BehaviorSubject(quantityDictionary.en);
    this.dictionaryGeneral$ = new BehaviorSubject(generalDictionary.en);
    this.store.select(selectLanguage).subscribe(language => {
      this.dictionary$.next(quantityDictionary[language]);
      this.dictionaryGeneral$.next(generalDictionary[language]);
      console.log(this.dictionary$)
    });
  }

  dictionary$: BehaviorSubject<LanguageDictionary>;

  dictionaryGeneral$: BehaviorSubject<GeneralDictionaryLanguage>;
}
