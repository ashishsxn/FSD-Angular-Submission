import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  LoggedInUser = 'guest';
  currentUrl = '/home'
  constructor(
    private loginProcess: LoginprocessService,
    private route:Router
  ) { 
  route.events.subscribe(event =>{
    if(event instanceof NavigationEnd){
      this.currentUrl = event.url
      if(event.url == '/user-menu'||event.url == '/trainer-menu'||event.url == '/admin-menu'){
        this.LoggedInUser = 'user';
      }else {
        this.LoggedInUser = 'guest';
      }
    }
  });    
  }

  // loggedin
  ngOnInit() {
     this.currentUrl = '/home'
  }

  logout() {
    this.loginProcess.logout();
    this.route.navigate(['/home']);

  }

}
