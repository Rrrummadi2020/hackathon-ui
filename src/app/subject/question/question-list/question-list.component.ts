import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questionList: any;
  subjectId:any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectId = params.get('subjectId');
      this.getAllQuestions(+(params.get('subjectId') + ''));
    })
  }
  editQuestion(id: number) {
    console.log(id);
    this.router.navigate(['/question', id, this.subjectId]);
  }
  deleteQuestion(id:number){
     this.questionService.deleteQuestion(id).subscribe({
      next:(resp)=>{
        console.log(resp);
      },error:(er)=>{

      },complete:()=>{
        this.getAllQuestions(this.subjectId);
      }
    })
    this.getAllQuestions(this.subjectId);
  }
  getAllQuestions(id:number){
    this.questionService.getAllQuestions(id).subscribe({
      next: (resp) => {
        this.questionList = resp;
      }
    });
  }
}
