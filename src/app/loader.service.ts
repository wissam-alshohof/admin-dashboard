import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  constructor() { }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
  isLoading$(): Observable<boolean> {
    return of(this.loading);
  }
}
