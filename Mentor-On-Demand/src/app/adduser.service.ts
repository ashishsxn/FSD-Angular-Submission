import { Injectable } from '@angular/core';
import {users} from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  constructor(private http: HttpClient) { }


  addNew(user) {
    users.push(user);
    this.http.post("/api/user/users",user).subscribe();
  }
  addNewMentor(user) {
    users.push(user);
    this.http.post("/api/mentor/mentors",user).subscribe();
  }

  getItems() {
    users;
  }
}
