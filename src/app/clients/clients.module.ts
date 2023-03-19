import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientPreviewComponent } from './client-preview/client-preview.component';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientPreviewComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
