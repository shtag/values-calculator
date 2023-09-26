import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MainFormComponent } from './components/main-form/main-form.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { NumberOnlyDirective } from '../shared/directives/number-only.directive';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainFormComponent,
    SettingsDialogComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainFormComponent,
    SharedModule
  ]
})
export class CoreModule { }
