import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  constructor(private subjectService:SubjectService,private router:Router) { }
subjectList:any[]=[];


  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe({
      next:(resp)=>{
        this.subjectList = resp
      }
    })
  }
  editStudent(id:number){
    this.router.navigate(['/subject',id]);
    
  }
  goToQuestions(id:number){
    this.router.navigate(['/questions',id])
  }
}
