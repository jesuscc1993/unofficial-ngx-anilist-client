import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatGridListModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule,
  MatSortModule, MatTableModule, MatToolbarModule
} from '@angular/material';

const modules: any[] = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
