import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private userService: UserService) { }

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  ngOnInit(): void {


  }

  onSubmit(){
    console.log(this.loginForm.value)
    let credentials = this.loginForm.value;
    console.log(credentials);
    credentials.password = Md5.hashStr(credentials.password);
    let obs = this.userService.authUser(credentials);
    obs.subscribe((data)=>{
      console.log(data)
    })
  }

}
