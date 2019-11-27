import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {users} from '../users';

import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  registrationForm
  submitted = false;
  constructor(
    private addUserService: AdduserService
  ) {
    
    
    this.registrationForm = new FormGroup({
      userName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      phone : new FormControl(''),
      password : new FormControl('',Validators.required),
      role: new FormControl('user'),
      status: new FormControl('unblocked'),

      experience: new FormControl(''),
      timezone: new FormControl('undefined'),
      timeslot: new FormControl('undefined'),
      
      linkedin: new FormControl(''),
      skills: new FormControl(['na']),
      videos: new FormControl(false),
      blogs: new FormControl(false),
      ppts: new FormControl(false),
      demos: new FormControl(false),
      startdate: new FormControl(),
      enddate: new FormControl(),
    });
   }

  ngOnInit() {
  }

  addNew(user) {
    this.addUserService.addNew(user);
    this.submitted = true;
  }


}
