import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private subjecService: SubjectService,
    private router: Router,
    private formBuilder:FormBuilder) { }
  subjectForm: any;
  isEdit:boolean = false;
  subject: any = {};
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(+(params.get('id') + '')){
        this.isEdit = true;
        this.subjecService.getSubjectById(+(params.get('id') + '')).subscribe({
          next: (resp) => {
            this.subject = resp;
          }, error: (error) => {
            console.log(error);
          }, complete: () => {
            this.buildForm(this.subject);
          }
        })
      }else{
        this.isEdit = false;
        this.buildForm(this.subject);
      }
    })
  }
  buildForm(subject:any){
    this.subjectForm = this.formBuilder.group({
      id: [subject?.id],
      name: [subject?.name],
      description: [subject?.description]
    });
  }
  onSubmit() {
    console.log(this.subjectForm);
    if(this.isEdit){
      this.subjecService.updateSubject(this.subjectForm.value).subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err)
        }, complete: () => {
          this.router.navigate(['/subjects'])
        }
      })
    }else{
      this.subjecService.createSubject(this.subjectForm.value).subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err)
        }, complete: () => {
          this.router.navigate(['/subjects'])
        }
      })
    }
  }
}
