
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  private _url:string = 'http://localhost:9191/api/subjects'
  public getAllSubjects():Observable<any[]>{
    return this.http.get<any[]>(this._url);
  } 
  public getSubjectById(id:number){
    return this.http.get(this._url+'/'+id);
  }
  public updateSubject(subject:any){
    return this.http.put(this._url,subject);

  }
  public createSubject(subject:any) {
    return this.http.post(this._url,subject )
  }
}
