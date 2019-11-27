import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';
import { DataReaderService } from '../data-reader.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { AdduserService } from '../adduser.service';
import { Course } from '../course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainermenu',
  templateUrl: './trainermenu.component.html',
  styleUrls: ['./trainermenu.component.css']
})
export class TrainermenuComponent implements OnInit {

  currentUser
  currentUserData
  completedUserData
  loggedin
  registrationForm
  technologies
  courseData
  course: Course
  public dpname 
  constructor(
    private loginProcess: LoginprocessService,
    private dataReader: DataReaderService,
    private route: Router,
    private addUserService: AdduserService,
    private http: HttpClient
  ) {

    this.dataReader.getJSON('user/courses').subscribe(data => {
      this.courseData = data
    });
    this.dataReader.getJSON('mentor/skills').subscribe(data => {
      this.technologies = data
    });
    this.currentUser = this.loginProcess.getCurrentUser();
    this.dpname = this.currentUser.userName;
    this.registrationForm = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      password: new FormControl(),
      // newpassword: new FormControl(''),
      experience: new FormControl(),
      timezone: new FormControl(),
      timeslot: new FormControl(),

      linkedin: new FormControl(),
      skills: new FormControl(),
      videos: new FormControl(),
      blogs: new FormControl(),
      ppts: new FormControl(),
      demos: new FormControl(),
      startdate: new FormControl(),
      enddate: new FormControl(),

      role: new FormControl('mentor'),
      status: new FormControl()
    });




  }

  ngOnInit() {


    this.currentUser = this.loginProcess.getCurrentUser();
    this.loggedin = this.loginProcess.loggedin;
    if (!this.loggedin)
      this.route.navigate(['/login']);
    this.registrationForm.patchValue(this.currentUser);

  }
  reloadComponent() {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/trainer-menu']);
}
  addNew(user) {
    this.addUserService.addNewMentor(user);
    
    this.loginProcess.update();

    this.loginProcess.authenticate(this.currentUser);

    this.currentUser = this.loginProcess.getCurrentUser();

  }

  update() {
    this.dataReader.getJSON('user/courses').subscribe(data => {
      this.courseData = data
    });
  }
  approve(data) {
    this.course={
      coursename : data.coursename,
      fee: data.fee,
      mentor:data.mentor,
      progress:data.progress,
      status:"Approved",
      user:data.user,
      id:data.id
      // edited 
    }
    this.http.post("/api/user/courses",this.course).subscribe();
    this.update();
  }
  reject(data) {
    this.course={
      coursename : data.coursename,
      fee: data.fee,
      mentor:data.mentor,
      progress:data.progress,
      status:"Rejected",
      user:data.user,
      id:data.id
      // edited 
    }
    this.http.post("/api/user/courses",this.course).subscribe();
    this.update();
  }
  withdrawPayment(data) {
    this.course={
      coursename : data.coursename,
      fee: data.fee,
      mentor:data.mentor,
      progress:data.progress,
      status:"Payment Withdrawn",
      user:data.user,
      id:data.id
      // edited 
    }
    this.http.post("/api/user/courses",this.course).subscribe();
    this.update();
  }


}
