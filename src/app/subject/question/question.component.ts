import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionForm: any;
  question: any;
  subjectId:any;
  isEdit:boolean=false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private formBuilder: FormBuilder) { }

  get listOfChoices() {
    return this.questionForm.get('choices') as FormArray;
  }
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectId = params.get('subjectId');
      if(+(params.get('questionId') + '')){
        this.isEdit= true;
        this.questionService.getQuestionById(+(params.get('questionId') + '')).subscribe({
          next: (resp) => {
            this.question = resp;
          },
          error: (err) => { },
          complete: () => {
           this.buildForm(this.question);
          }
        })
      }else{
        this.isEdit = false;
        this.buildForm(this.question);
        for (let i = 0; i < 4; i++) { 
          this.listOfChoices.push(this.formBuilder.group({
            'id':[''],
            'name':['']
          }))
        }
      }
    })
  }
  buildForm(question:any){
    this.questionForm = this.formBuilder.group({
      'id':[question?.id],
      'question': [question?.question],
      'answer': [question?.answer],
      'choices': this.formBuilder.array([])
    });
    if(question){
      for (var val of question?.choices) {
        this.listOfChoices.push(
          this.formBuilder.group({
            'id': [val.id],
            'name': [val.name]
          })
        )
      }
    }
  }
  onSubmit() {
    console.log(this.questionForm.value);
    if(this.isEdit){
      this.questionService.updateQuestion(this.questionForm.value).subscribe({
        next:()=>{},
        error:()=>{},
        complete:()=>{
          this.router.navigate(['/questions',this.subjectId])
        }
      })
    }else{
      this.questionService.createQuestion(this.questionForm.value,this.subjectId).subscribe({
        next:()=>{},
        error:()=>{},
        complete:()=>{
          this.router.navigate(['/questions',this.subjectId])
        }
      })
    }
  }
}
