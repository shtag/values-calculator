import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateLanguage } from 'src/app/state/state.actions';
import { Observable, Subscription } from 'rxjs';
import { GeneralDictionaryLanguage } from 'src/assets/dictianary';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnDestroy {
  constructor(
    private store: Store,
    private dictionaryService: DictionaryService,
  ) {
    this.language = 'en';
    this.languageSubscription$ = this.dictionaryService.language$.subscribe(language => this.language = language);
    this.dictionaryGeneral$ = this.dictionaryService.dictionaryGeneral$
  }

  language: 'ru' | 'en';

  theme = 'dark'

  languageSubscription$: Subscription

  dictionaryGeneral$: Observable<GeneralDictionaryLanguage>

  changeLang() {
    this.store.dispatch(updateLanguage({ language: this.language }))
    localStorage.setItem('language', this.language);
  }

  changeTheme() {
    console.log('theme')
  }

  ngOnDestroy(): void {
    this.languageSubscription$.unsubscribe()
  }
}
