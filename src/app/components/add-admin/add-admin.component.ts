import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  formAdmin:FormGroup;
  user: any = {};


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formAdmin = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      tel: [''],
      password: ['']
    })
  }

  addAdmin() {
    console.log('user', this.user);
    

  let users = JSON.parse(localStorage.getItem('users') || '[]');
     let id = JSON.parse(localStorage.getItem('idUser') || '1');
     this.user.id = id;
     users.push(this.user);
     localStorage.setItem('users', JSON.stringify(users));
     localStorage.setItem('idUser', id + 1)

  }

}
