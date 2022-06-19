import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private _url:string = 'http://localhost:9191/api/';
  constructor(private http:HttpClient) { }

  public getAllQuestions(subjectId:number){
    return this.http.get(this._url+'questions/'+subjectId);
  }
  public getQuestionById(id:number){
    return this.http.get(this._url+'question/'+id);
  }
  public updateQuestion(question:any){
    return this.http.put(this._url+'questions',question);
  }

  public createQuestion(question:any,subjectId:number){
    return this.http.post(this._url+'questions/'+subjectId,question);
  }
  public deleteQuestion(id:number){
    return this.http.delete(this._url+'questions/'+id);
  }

}
