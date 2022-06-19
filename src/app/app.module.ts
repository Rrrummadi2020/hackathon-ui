import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { QuestionComponent } from './subject/question/question.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectResolver } from './resolver/subject-resolver';
import { QuestionListComponent } from './subject/question/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    QuestionComponent,
    LoginComponent,
    SubjectListComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SubjectResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
