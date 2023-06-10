import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [

    // NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonToggleModule,
    // NumberOnlyDirective
  ]
})
export class SharedModule { }
