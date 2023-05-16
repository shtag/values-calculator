import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ValueItemComponent } from './components/value-item/value-item.component';
import { MainFormComponent } from './components/main-form/main-form.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ValueItemComponent,
    MainFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ValueItemComponent,
    MainFormComponent
  ]
})
export class CoreModule { }
