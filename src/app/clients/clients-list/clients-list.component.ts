import { Component, inject, OnDestroy } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ClientsService } from '../services/clients.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UPDATE_TYPE } from 'src/app/shared/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnDestroy {

  // handle subscription
  _destroy$ = new Subject();

  //  client service CRUD
  clientsService = inject(ClientsService);

  router = inject(Router);
  dialog = inject(MatDialog);

  /**
   * table config 
   * data : clients$
   */
  clients$ = this.clientsService.getClients();

  /**
   * table config 
   * colDefs : colDefs
   */
  colDefs = [
    { def: 'full_name', caption: 'Full Name' }, { def: 'mobile_number', caption: 'Phone Number' }, { def: 'address', caption: 'Address' }, { def: 'subscription_plan', caption: 'Subscription Type' }
  ];

  /**
   * table config 
   * onUpdate : updateHandler
   */
  updateHandler(item: { data: any, type: string }) {
    if (item.type == UPDATE_TYPE.delete) {

      this.dialog.open(ConfirmDialogComponent, {}).afterClosed().pipe(takeUntil(this._destroy$)).subscribe(
        data => {
          if (data) {
            this.clientsService.deleteClient(item.data).pipe(takeUntil(this._destroy$)).subscribe();
          }
        });
    } else if (item.type == UPDATE_TYPE.view) {
      this.clientsService.getClientById(item.data['id']).pipe(takeUntil(this._destroy$)).subscribe(
        data => this.router.navigate([`/clients/${item.data['id']}`], { state: {...data,readonly:true} })
      );
    } else {
      this.clientsService.getClientById(item.data['id']).pipe(takeUntil(this._destroy$)).subscribe(
        data => this.router.navigate([`/clients/${item.data['id']}`], { state: {...data,readonly:false} })
      );
    }
  }

  addClient() {
    this.router.navigate([`/clients/new-client`],{
      state:{newUser:true}
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next('');
    this._destroy$.complete();
  }
}  