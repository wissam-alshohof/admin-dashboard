import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Route[] = [
  { path: '', component: ClientsListComponent },
  { path: ':id', component: ClientComponent },
  { path: 'new-client', component: ClientComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
