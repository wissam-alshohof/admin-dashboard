import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ClassesService } from '../services/classes.service';

import { MatDialog } from '@angular/material/dialog';
import { UPDATE_TYPE } from 'src/app/shared/enums';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnDestroy {

  // handle subscription
  _destroy$ = new Subject();

  //  class service CRUD
  classesService = inject(ClassesService);

  router = inject(Router);
  dialog = inject(MatDialog);

  /**
   * table config 
   * data : classes$
   */
  classes$ = this.classesService.getClasses();

  /**
   * table config 
   * colDefs : colDefs
   */
  colDefs = [
    { def: 'title', caption: 'Class Title' },
    { def: 'coach_name', caption: 'Coach Name' },
    { def: 'timing', caption: 'Timing' },
    { def: 'price', caption: 'Price' }
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
            this.classesService.deleteClass(item.data).pipe(takeUntil(this._destroy$)).subscribe();
          }
        });
    } else if (item.type == UPDATE_TYPE.view) {
      this.classesService.getClassById(item.data['id']).pipe(takeUntil(this._destroy$)).subscribe(
        data => this.router.navigate([`/classes/${item.data['id']}`], { state: { ...data, readonly: true } })
      );
    } else {
      this.classesService.getClassById(item.data['id']).pipe(takeUntil(this._destroy$)).subscribe(
        data => this.router.navigate([`/classes/${item.data['id']}`], { state: { ...data, readonly: false } })
      );
    }
  }

  addClass() {
    this.router.navigate([`/classes/new-class`], {
      state: { newClass: true }
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next('');
    this._destroy$.complete();
  }
}  