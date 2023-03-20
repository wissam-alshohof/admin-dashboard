import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/shared/apis';
import { ClassModel } from '../models/classModel';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private httpService:HttpClient) { }
  getClasses() : Observable<ClassModel[]> {
    return this.httpService.get(APIS.classes) as Observable<ClassModel[]>;
  }
  getClassById(id:string) : Observable<ClassModel> {
    return this.httpService.get(APIS.classById+id) as Observable<ClassModel>;
  }

  addClass(classGym:Omit<ClassModel,'id'>):Observable<ClassModel> {
    return this.httpService.post(APIS.classById,classGym) as Observable<ClassModel>;
  }

  updateClass(classGym:ClassModel) : Observable<ClassModel> {
    return this.httpService.put(APIS.classById+classGym.id,classGym) as Observable<ClassModel>;
  }

  deleteClass({id}:{id:string}): Observable<ClassModel> {
    return this.httpService.delete(APIS.classById+id) as Observable<ClassModel>;
  }
}
