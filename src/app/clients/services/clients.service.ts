import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { APIS } from 'src/app/shared/apis';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(public http:HttpClient) { 

  }
  getClients() : Observable<Client[]>{
    return this.http.get(APIS.clients) as Observable<Client[]>;
  }
  getClientById(id:string) : Observable<Client> {
    return this.http.get(APIS.clientById+id) as Observable<Client>;

  }

  addClient(client:Omit<Client,'id'>):Observable<Client> {
    return this.http.post(APIS.clients,client) as Observable<Client>;
  }

  updateClient(client:Client) : Observable<Client> {
    return this.http.put(APIS.clientById+client.id,client) as Observable<Client>;
  }

  deleteClient({id}:{id:string}): Observable<Client> {
    return this.http.delete(APIS.clientById+id) as Observable<Client>;
  }
}
