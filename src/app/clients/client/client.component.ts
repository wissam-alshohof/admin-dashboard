import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service';
import * as _ from 'lodash';

type ClientModel = Client & {readonly:boolean,newUser?:boolean};

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  client!: ClientModel;
  isReadonly = true;
  isNewUser = false;

  _subscription$ = new Subscription();

  constructor(private router: Router, private clientsService:ClientsService) {

    this.client = this.router.getCurrentNavigation()?.extras.state as ClientModel;
    if(!this.client) {
      this.back();
    }
    if(this.client['newUser']) {
      this.isNewUser = true;
    }
    this.isReadonly = this.client.readonly;
  }
  ngOnInit(): void {
  }

  submit(form:NgForm) {
    if(this.client.id) {
      this._subscription$.add(this.clientsService.updateClient({..._.omit(this.client,'readonly'),...form.value}).subscribe(
        d => this.back()
      ));
    } else {
      this._subscription$.add(this.clientsService.addClient(form.value).subscribe(
        d => this.back()
      ));
    }
  }

  back() {
    this.router.navigate(['/clients']);
  }
  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

}
