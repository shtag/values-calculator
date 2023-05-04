import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    MatSlideToggleModule,
    FormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
