import { Component } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkTheme: boolean;

  constructor(private theme: ThemeService) {
    this.isDarkTheme = true
  }

  toggleTheme() {
    this.theme.update(this.isDarkTheme);
  }
}
