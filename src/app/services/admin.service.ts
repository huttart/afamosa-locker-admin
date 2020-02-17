import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api_url = environment.api_url + 'admin/';

  constructor(
    private http: HttpClient,
  ) { }

  getUser() {
    return this.http.get(this.api_url + 'getUser', {
    }).toPromise();
  }

  getUserByID(user_id) {
    return this.http.get(this.api_url + 'getUserByID', {
      params: {
        user_id: user_id
      }
    }).toPromise();
  }

  addUser(username, password, role, f_name, l_name) {
    return this.http.get(this.api_url + 'addUser', {
      params: {
        username: username,
        password: password,
        role:     role,
        f_name:   f_name,
        l_name:   l_name
      }
    }).toPromise();
  }

  updateUserByID(role, f_name, l_name, user_id) {
    return this.http.get(this.api_url + 'UpdateUserByID', {
      params: {
        role:   role,
        f_name: f_name,
        l_name: l_name,
        id:     user_id
      }
    }).toPromise();
  }

  removeUser(user_id) {
    return this.http.get(this.api_url + 'removeUserByID', {
      params: {
        id: user_id
      }
    }).toPromise();
  }

  changePassword(user_id, new_password) {
    return this.http.get(this.api_url + 'changePassword', {
      params: {
        id: user_id,
        new_password: new_password
      }
    }).toPromise();
  }



}
