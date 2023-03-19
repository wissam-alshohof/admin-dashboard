import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ImgDirective,
    TableComponent
  ],
  imports: [
    CommonModule,MatIconModule, MatTableModule, MatPaginatorModule
  ],
  exports: [ImgDirective, MatIconModule, MatTableModule, MatPaginatorModule, TableComponent]
})
export class SharedModule { }
