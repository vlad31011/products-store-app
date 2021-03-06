import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const MAT_MODULES = [
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatAutocompleteModule,
  TextFieldModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  exports: [
    ...MAT_MODULES
  ]
})
export class MaterialModule { }
