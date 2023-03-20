import { Component, AfterViewInit, OnDestroy, ViewChild, Input, OnInit, EventEmitter, Output, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UPDATE_TYPE } from '../enums';
import { LoaderService } from 'src/app/loader.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit, OnDestroy {

  isLoading = inject(LoaderService).isLoading$();

  dataSource = new MatTableDataSource<any>([]);
  Update_Type = UPDATE_TYPE
  @Input('data') data$!: Observable<any>
  @Input('colDefs') colDefs! : {def:string,caption:string}[];

/**
 * emit type of data manipulation
 * @emit `UPDATE_TYPE = view | edit | delete ` and `element data`
 */
  @Output('onUpdate') onUpdate = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
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

  updateItem(item:any,type: string) {
    this.onUpdate.next({
      data:item,
      type: type
    });
  }
  ngOnDestroy() {
    this._destroy$.next('');
    this._destroy$.complete();
  }
}