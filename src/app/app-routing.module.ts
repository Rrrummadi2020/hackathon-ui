import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubjectResolver } from './resolver/subject-resolver';
import { QuestionListComponent } from './subject/question/question-list/question-list.component';
import { QuestionComponent } from './subject/question/question.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'subject/:id',component:SubjectComponent},
  {path:'subject',component:SubjectComponent},
  {path:'subjects',component:SubjectListComponent},
  {path:'question/:subjectId',component:QuestionComponent},
  {path:'question/:questionId/:subjectId',component:QuestionComponent},
  {path:'questions/:subjectId',component:QuestionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
