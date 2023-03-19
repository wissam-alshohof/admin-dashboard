import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "" , pathMatch: "full", redirectTo: "clients"},
  { path: "clients", loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  { path: "classes", loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
