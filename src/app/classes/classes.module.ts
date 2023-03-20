import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClassGymComponent } from './class-gym/class-gym.component';


@NgModule({
  declarations: [
    ClassesListComponent,
    ClassGymComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    SharedModule
  ]
})
export class ClassesModule { }
