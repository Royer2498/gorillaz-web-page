import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {downloadUserInformation} from './textFileWritter.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedCharacter:string = "";
  user = { 
    userName: "",
    password:"",
    passwordConfirm:"",
    email:"",
    character:""
  };

  constructor(private http:HttpClient, private router:Router) {
  }

  ngOnInit() {
    localStorage.clear();
  }

  changeTheCharacterIcon(event: any){
    this.selectedCharacter = event.target.value;
  }

  register(){
    localStorage.setItem('userName',this.user.userName);
    localStorage.setItem('character',this.user.character);
    downloadUserInformation(this.user);
    this.router.navigateByUrl('/home');
  }
}
