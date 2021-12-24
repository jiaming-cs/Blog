import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  loginForm = this.formBuilder.group({
    userName: '',
    passWord: ''
  })

  ngOnInit(): void {


  }

  onSubmit(){
    console.log(this.loginForm.value)

  }

}
