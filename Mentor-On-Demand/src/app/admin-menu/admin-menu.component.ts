import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';
import { DataReaderService } from '../data-reader.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  currentUser
  loggedin
  users
  mentors
  techForm
  editForm
  technologies
  constructor(private loginProcess: LoginprocessService,
    private dataReader: DataReaderService,
    private route: Router,
    private http: HttpClient) {

    this.dataReader.getJSON('user/users').subscribe(data => {
      console.log(data);
      this.users = data
    });
    this.dataReader.getJSON('mentor/mentors').subscribe(data => {
      console.log(data);
      this.mentors = data
    });
    this.dataReader.getJSON('admin/technologies').subscribe(data => {
      console.log(data);
      this.technologies = data
    });

    this.techForm = new FormGroup({

      technology: new FormControl(''),

      fee: new FormControl(10000),

      commission: new FormControl(10)
    });

    this.editForm = new FormGroup({

      fee: new FormControl(),

      commission: new FormControl()
    });

  }

  ngOnInit() {
    this.currentUser = this.loginProcess.getCurrentUser();
    this.loggedin = this.loginProcess.loggedin;
    if (!this.loggedin)
      this.route.navigate(['/admin']);
  }

  blockUser(user, i) {
    console.log(user);
    this.http.get("/api/" + "admin/blockuser/" + user).subscribe();
    if (this.users[i].status == "unblocked")
      this.users[i].status = "blocked"
    else
      this.users[i].status = "unblocked"
  }

  blockMentor(mentor, i) {
    console.log(mentor);
    this.http.get("/api/" + "admin/blockmentor/" + mentor).subscribe();
    if (this.mentors[i].status == "unblocked")
      this.mentors[i].status = "blocked"
    else
      this.mentors[i].status = "unblocked"
  }
  reloadComponent() {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/admin-menu']);
  }
  addTechnology(tech) {
    this.http.post("/api/admin/technologies", tech).subscribe();
    this.dataReader.getJSON('admin/technologies').subscribe(data => {
      console.log(data);
      this.technologies = data
    });
    this.reloadComponent();
  }
  removeTechnology(tech) {
    this.http.delete("/api/admin/technologies/"+tech).subscribe();
    this.dataReader.getJSON('admin/technologies').subscribe(data => {
      console.log(data);
      this.technologies = data
    });
    this.reloadComponent();
  }
  editTechnology(tech,fee,commission) {
    tech.fee=fee;
    tech.commission=commission;
    this.http.post("/api/admin/technologies", tech).subscribe();
    this.dataReader.getJSON('admin/technologies').subscribe(data => {
      console.log(data);
      this.technologies = data
    });
    this.reloadComponent();
  }
  
}
