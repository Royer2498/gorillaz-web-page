import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-with-account',
  templateUrl: './login-with-account.component.html',
  styleUrls: ['./login-with-account.component.css']
})
export class LoginWithAccountComponent implements OnInit {

  registeredUsers:any;
  candidateUser = { 
    userName: "",
    password:""
  };
  indexOfValidUser=0;
  isValidUserName=true;
  isValidPassword = true;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    localStorage.clear();
    this.http.get('http://localhost:4200/assets/data/Usuarios.txt',{responseType:'json'}).subscribe(data => {
      let dataFromFile:any = data;
      this.registeredUsers = dataFromFile.users;
    });
  }


  isAValidUserName(){
    for(let i=0; i<this.registeredUsers.length; i++){
      if(this.candidateUser.userName == this.registeredUsers[i].userName){
        this.indexOfValidUser = i;  
        this.isValidUserName=true;
        return true;
      }
    }
    this.isValidUserName = false;
    return false;
  }

  isAValidPassword(){
    if(this.isAValidUserName() && this.registeredUsers[this.indexOfValidUser].password == this.candidateUser.password){
      this.isValidPassword = true;
      return true;
    }else{
      this.isValidPassword = false;
      return false;
    }
  }

  login(){
    if(this.isAValidPassword() && this.isAValidUserName()){
      this.router.navigateByUrl('/home');
      localStorage.setItem('userName',this.registeredUsers[this.indexOfValidUser].userName);
      localStorage.setItem('character',this.registeredUsers[this.indexOfValidUser].character);
    }
  }
}
