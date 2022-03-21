import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;


  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['', Validators.minLength(4)],
      email: ['',[Validators.email, Validators.required]],
      tel: [''],
      password: ['',[Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword:['']
    }
  ,
  {
  validator: MustMatch('password','confirmPassword')
  }
  );
    
  }
  signup(f:any){
    console.log(f);
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let idUser= JSON.parse(localStorage.getItem("idUser") || "1");

    f.id= idUser;
    //f.role= "client"; 

    users.push(f);

    localStorage.setItem("users", JSON.stringify(users)); 
    localStorage.setItem("idUser", idUser + 1); 
}
}
