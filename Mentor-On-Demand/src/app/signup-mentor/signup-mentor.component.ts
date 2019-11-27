import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormArray ,Validators} from '@angular/forms';
import { users } from '../users';
import { DataReaderService } from '../data-reader.service';

import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-signup-mentor',
  templateUrl: './signup-mentor.component.html',
  styleUrls: ['./signup-mentor.component.css']
})
export class SignupMentorComponent implements OnInit {

  registrationForm
  technologies
  // materialForm
  submitted = false;

  constructor(
    private addUserService: AdduserService,
    private dataReader: DataReaderService
  ) {

    this.dataReader.getJSON('mentor/skills').subscribe(data => {
      this.technologies = data
    });

    this.registrationForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl(''),
      password: new FormControl('',Validators.required),
      experience: new FormControl(''),
      timezone: new FormControl('undefined'),
      timeslot: new FormControl('undefined'),
      
      linkedin: new FormControl(''),
      skills: new FormControl(['other']),
      videos: new FormControl(false),
      blogs: new FormControl(false),
      ppts: new FormControl(false),
      demos: new FormControl(false),
      startdate: new FormControl(),
      enddate: new FormControl(),

      role: new FormControl('mentor'),
      status: new FormControl('unblocked')
    });
    


  }

  ngOnInit() {
  }

  addNew(user) {
    this.addUserService.addNewMentor(user);
    this.submitted = true;
  }

}
