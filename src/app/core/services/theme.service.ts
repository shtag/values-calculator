import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme: Subject<boolean>;

  constructor() {
    this.theme = new Subject<boolean>
  }

  update(isDark: boolean) {
    this.theme.next(isDark);

  }

  private readonly DARK_THEME_CLASS = 'dark-theme';

  setDarkTheme(): void {
    document.documentElement.classList.add(this.DARK_THEME_CLASS);
  }

  setLightTheme(): void {
    document.documentElement.classList.remove(this.DARK_THEME_CLASS);
  }

  private currentTheme: ThemePalette = 'accent';

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'accent' ? 'accent' : 'warn';
    const bodyElement = document.querySelector('body');

    if (bodyElement) {
      bodyElement.setAttribute('data-theme', this.currentTheme);
    }
  }
}
