import { Component, AfterViewInit, OnDestroy, ViewChild, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit, OnDestroy {
  //get clients

  dataSource = new MatTableDataSource<any>([]);
  @Input('data') data$!: Observable<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input('colDefs') colDefs! : {def:string,caption:string}[];

  _destroy$ = new Subject();
  headersDef: string[] = [];
  ngAfterViewInit() {
    this.data$.pipe(takeUntil(this._destroy$)).subscribe(clients => {
      this.dataSource.data = clients;
      this.dataSource.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
    this.headersDef = this.colDefs.map(col => col['def']);
  }
  ngOnDestroy() {
    this._destroy$.next('');
    this._destroy$.complete();
  }
}