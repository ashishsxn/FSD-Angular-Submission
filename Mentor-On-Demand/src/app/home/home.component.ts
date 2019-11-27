import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm
  constructor(
    private route: Router
  ) {

    this.searchForm = new FormGroup({

      course: new FormControl(''),

      time: new FormControl('')
    });

  }

  ngOnInit() {
  }

  search() {
    this.route.navigate(['/search-result']);
  }

}
