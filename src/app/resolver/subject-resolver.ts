import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SubjectService } from '../subject/subject.service';
 
 
@Injectable({
    providedIn:'root'
})
export class SubjectResolver implements Resolve<any> {
  constructor(private service: SubjectService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.service.getSubjectById(+(route.paramMap.get('id')+"")).pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
