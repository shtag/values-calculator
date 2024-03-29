
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { setCurrentType } from 'src/app/state/state.actions';
import { selectCurrentType } from 'src/app/state/state.selectors';
import { GeneralDictionaryLanguage, Types } from 'src/assets/dictianary';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  currentType$: Observable<Types>;

  dictionaryGeneral$: Observable<GeneralDictionaryLanguage> = this.dictionaryService.dictionaryGeneral$;

  types: { name: string; value: string }[] = [];

  form = new FormGroup({
    typeSelector: new FormControl()
  })

  constructor(private store: Store, private dictionaryService: DictionaryService) {
    this.currentType$ = this.store.select(selectCurrentType)
    this.dictionaryService.dictionary$.subscribe(dictionary => {
      this.types = []
      Object.entries(dictionary).forEach(type => {
        if (type[1].name !== 'temperature' && type[1].name !== "температура") { // TODO: this line skip temperature, add temp convertion
          this.types.push({ name: type[1].name, value: type[0] });
        }
      });
    });
  }

  changeType() {
    if (this.form.value.typeSelector || this.form.value.typeSelector === '') {
      this.store.dispatch(setCurrentType({ currentType: this.form.value.typeSelector }))
    }
  }
}
