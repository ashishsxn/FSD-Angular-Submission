import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginprocessService } from '../loginprocess.service';
import { DataReaderService } from '../data-reader.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Course } from '../course';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchForm
  searchData
  loggedin
  technologies
  searchResults
  chosenTech
  course: Course
  public query = "Spring Boot"

  constructor(
    private loginProcess: LoginprocessService,
    private dataReader: DataReaderService,
    private route: Router,
    private http: HttpClient
  ) {
    //todo
    this.searchForm = new FormGroup({

      course: new FormControl('undefined'),

      from: new FormControl(),

      timeslot: new FormControl('undefined')
    });
    
    this.dataReader.getJSON('admin/technologies').subscribe(data => {
      this.technologies = data
    });

  }

  ngOnInit() {

    this.loggedin = this.loginProcess.loggedin;
  }
  propose(data) {
    if(!this.loggedin)
      this.route.navigate(['/login']);
    else {
      this.course={
        coursename : this.chosenTech.technology,
        fee: this.chosenTech.fee,
        mentor:data.email,
        progress:0,
        status:"Approval Pending",
        user:this.loginProcess.currentUser.email,
        id:0
        
      }
      this.http.post("/api/user/courses",this.course).subscribe();
    }
  }
  search(formvalue) {
    
    for(let tech of this.technologies) {
      if(tech.technology==formvalue.course)
        this.chosenTech=tech
    }
    this.http.post("/api/mentor/search",formvalue).subscribe(data => {
        this.searchResults = data
    });

  }



}
