import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SortPipe } from '../pipes/sort';
import { MaterialModule } from './material/material.module';

const references = [
  BrowserAnimationsModule,
  BrowserModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [SortPipe],
  imports: references,
  exports: [...references, SortPipe],
})
export class CoreModule {}
