import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginprocessService } from '../loginprocess.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm
  wrong = false;

  constructor(public router: Router,
    private loginProcess: LoginprocessService) {
    this.loginForm = new FormGroup({

      email: new FormControl('',[Validators.required,Validators.email]),

      password: new FormControl('',Validators.required),

      role: new FormControl('undefined',Validators.required)
    });

  }

  ngOnInit() {

    this.loginProcess.update();
  }

  authenticate(user) {
    this.loginProcess.update();
    if (!this.loginProcess.authenticate(user))
      this.wrong = true;
    else {
      if (user.role == "user") {
        this.router.navigate(['/user-menu']);
      }
      else {
        this.router.navigate(['/trainer-menu']);
      }
    }

  }
}
