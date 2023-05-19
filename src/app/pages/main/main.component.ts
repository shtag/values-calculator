
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { setCurrentType } from 'src/app/state/state.actions';
import { selectCurrentType } from 'src/app/state/state.selectors';
import { GeneralDictionaryLanguage } from 'src/assets/dictianary';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  currentType$: Observable<string>;

  constructor(private store: Store, private dictionaryService: DictionaryService) {
    this.currentType$ = this.store.select(selectCurrentType)
    this.currentType$.subscribe(type => this.currentType = type)
    this.dictionaryService.dictionary$.subscribe(dictionary => {
      this.types = []
      Object.entries(dictionary).forEach(type => {
        this.types.push({ name: type[1].name, value: type[0] });
      });
    });

  }

  dictionaryGeneral$: Observable<GeneralDictionaryLanguage> = this.dictionaryService.dictionaryGeneral$;

  currentType = 'area';

  types: { name: string; value: string }[] = []

  form = new FormGroup({
    typeSelector: new FormControl()
  })

  changeType() {
    if (this.form.value.typeSelector) {
      this.store.dispatch(setCurrentType({ currentType: this.form.value.typeSelector }))
    }
  }
}
