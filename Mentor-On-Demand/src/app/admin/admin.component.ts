import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginprocessService } from '../loginprocess.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm
  wrong = false;

  constructor(public router: Router,
    private loginProcess: LoginprocessService,
    private http: HttpClient) {
    this.loginForm = new FormGroup({

      email: new FormControl('',[Validators.required,Validators.email]),

      password: new FormControl('',Validators.required),

      role: new FormControl('admin')
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
      this.router.navigate(['/admin-menu']);
    }

  }
  blockUser(user) {
    this.http.get("/api/block/user/"+user)
  }

}
