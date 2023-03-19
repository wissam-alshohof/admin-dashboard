import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';
import { TableComponent } from './table/table.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    ImgDirective,
    TableComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  entryComponents:[ConfirmDialogComponent],
  exports: [ 
    ImgDirective, 
    MatIconModule, 
    MatTableModule, 
    MatPaginatorModule, 
    TableComponent,
    MatCardModule,
    MatButtonModule,
    FormsModule,
  ]
})
export class SharedModule { }
