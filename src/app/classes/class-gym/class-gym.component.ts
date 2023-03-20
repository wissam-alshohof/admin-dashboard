import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import * as _ from 'lodash';

import { ClassModel } from '../models/classModel';
import { ClassesService } from '../services/classes.service';


type ClassExtendedModel = ClassModel & {readonly:boolean,newClass?:boolean};

@Component({
  selector: 'app-class-gym',
  templateUrl: './class-gym.component.html',
  styleUrls: ['./class-gym.component.scss']
})
export class ClassGymComponent implements OnInit, OnDestroy {

  classGym!: ClassExtendedModel;
  isReadonly = true;
  isNewClass = false;

  _subscription$ = new Subscription();

  constructor(private router: Router, private classsService:ClassesService) {

    this.classGym = this.router.getCurrentNavigation()?.extras.state as ClassExtendedModel;

    //
    if(!this.classGym) {
      this.back();
    }
    if(this.classGym['newClass']) {
      this.isNewClass = true;
    }
    this.isReadonly = this.classGym.readonly;
  }
  ngOnInit(): void {
  }

  submit(form:NgForm) {
    if(this.classGym.id) {
      this._subscription$.add(this.classsService.updateClass({..._.omit(this.classGym,'readonly'),...form.value}).subscribe(
        d => this.back()
      ));
    } else {
      this._subscription$.add(this.classsService.addClass(form.value).subscribe(
        d => this.back()
      ));
    }
  }

  back() {
    this.router.navigate(['/classes']);
  }
  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

}
