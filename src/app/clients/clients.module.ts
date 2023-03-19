import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientPreviewComponent } from './client-preview/client-preview.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientPreviewComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
