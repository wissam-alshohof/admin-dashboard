import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientComponent } from './client/client.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
