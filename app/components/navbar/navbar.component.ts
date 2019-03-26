import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser = {
    userName:"",
    character:""
  }

  constructor(private router:Router) { }

  ngOnInit() {
    this.loggedUser.userName = localStorage.getItem('userName');
    this.loggedUser.character = localStorage.getItem('character');
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

}
