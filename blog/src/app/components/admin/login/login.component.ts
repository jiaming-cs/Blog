import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private userService: UserService) { }

  loginForm = this.formBuilder.group({
    userName: '',
    passWord: ''
  })

  ngOnInit(): void {


  }

  onSubmit(){
    console.log(this.loginForm.value)
    let obs = this.userService.authUser(this.loginForm);
    obs.subscribe((data)=>{
      console.log(data)
    })
  }

}
