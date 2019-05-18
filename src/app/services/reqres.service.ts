import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  users: User[];
  apiUrl: string = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + `users/${userId}`)
    .pipe(
      map((item: any) => this.writeToUser(item.data))
    )
  }

  getUsers(pageId: number = 1): Observable<User[]> {
    return this.http.get(this.apiUrl + `users?page=${pageId}`)
    .pipe(
      map(data => {
        this.users = data['data'].map((item: any) => this.writeToUser(item));
        return this.users;
      })
    );
  }

  writeToUser(item: any): User {
    return {
      id: item.id,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      avatar: item.avatar
    }
  }
}
