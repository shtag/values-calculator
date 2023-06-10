import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { DictionaryService } from '../../services/dictionary.service';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // isDarkTheme: boolean;

  constructor(
    private theme: ThemeService,
    private dictionary: DictionaryService,
    public dialog: MatDialog,
    private overlayContainer: OverlayContainer
  ) {
    // this.isDarkTheme = true;
    this.title = '';
    this.dictionary.dictionaryGeneral$.subscribe(item => this.title = item.title)
  }

  isDarkTheme = false;

  buttonColor: ThemePalette = 'primary';

  title: string;

  toggleTheme() {
    // this.theme.update(this.isDarkTheme);
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      // this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.buttonColor = 'warn';
      // this.theme.setDarkTheme();
    } else {
      // this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.buttonColor = 'primary';
      // this.theme.setLightTheme();
    }
    this.theme.toggleTheme();
    console.log(this.overlayContainer.getContainerElement())
  }

  openSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      height: '300px',
      width: '300px',
    });
  }
}
