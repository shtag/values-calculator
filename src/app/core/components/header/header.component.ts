import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkTheme: boolean;

  constructor(private theme: ThemeService, private dictionary: DictionaryService) {
    this.isDarkTheme = true;
    this.title = '';
    this.dictionary.dictionaryGeneral$.subscribe(item => this.title = item.title)
  }

  title: string;

  toggleTheme() {
    this.theme.update(this.isDarkTheme);
  }
}
