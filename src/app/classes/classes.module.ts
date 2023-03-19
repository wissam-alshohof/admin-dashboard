import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassPreviewComponent } from './class-preview/class-preview.component';


@NgModule({
  declarations: [
    ClassesListComponent,
    ClassPreviewComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
