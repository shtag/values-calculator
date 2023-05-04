import { Injectable } from '@angular/core';
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
}
