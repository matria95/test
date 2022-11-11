import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject, User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public http: HttpClient) {}

  loadUsers(limit: number, skip: number): Observable<any> {
    return this.http.get<RootObject>('https://dummyjson.com/users', {
      params: {
        limit: limit,
        skip: skip,
      },
    });
  }

  getSingleUser(idUser: number): Observable<any> {
    return this.http.get<RootObject>('https://dummyjson.com/users/' + idUser);
  }
}
