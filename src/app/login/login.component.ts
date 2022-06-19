import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginForm:FormGroup = new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl('')
  });
  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['/subjects'])
  }
}
