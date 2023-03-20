import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassGymComponent } from './class-gym/class-gym.component';
import { ClassesListComponent } from './classes-list/classes-list.component';

const routes: Routes = [
  { path: '', component: ClassesListComponent },
  { path: ':id', component: ClassGymComponent },
  { path: 'new-class', component: ClassGymComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
