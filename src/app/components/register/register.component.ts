import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms'

import { NgForm } from '@angular/forms';

declare let Email: any;

export interface Courses {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "Registration";
  regform!: FormGroup;

  name: string = "";
  email: string = "";
  phone!: number;
  option: string = '';

  courses: Courses[] = [
  {value:1, viewValue: 'MEAN STACK'},
  {value:2, viewValue:'JAVA'},
  {value:3, viewValue:'RPA'},
  {value:4, viewValue: 'DEVOPS'}
];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerform();
  } 

registerform(){
  this.regform = this.fb.group({
    email :new FormControl('', [Validators.required, Validators.email]),
    name : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  })
}
cControl = new FormControl('', [Validators.required]);


/** getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getNameErrorMessage(){
    return this.name.hasError('required') ? 'You must enter a Name' :
    this.name.hasError('name') ? 'Not a Name': '';
  }

  getErrorPhone(){
    return this.phone.hasError('required') ? 'You must enter a number' :
    this.phone.hasError('phone') ? 'Not a Number': '';
  }*/
  
  onSubmit(f: NgForm) {

    Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'ananyaudaya99@gmail.com',
    Password : '31C345BB8402836FA306219E8B36EB0E97D2',
    To : 'ananyaudaya99@gmail.com',
    From : this.email,
    Subject : 'Registration',
    Body : `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.name} <br /> <b>Email: </b>${this.email}<br /> <b><br /> <b>Message:</b> <br /> <b>Course opted: </b>${this.name} <br />`
    }).then( (message: any) => {alert(message);} );
      
    }

}
