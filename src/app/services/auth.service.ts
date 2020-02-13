import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = environment.api_url + 'user/';
  user_data = {
    id: ''
  };
  constructor(
    private http: HttpClient,
  ) { }


  login(username, password) {
    return this.http.get(this.api_url + 'authen', {
      params : {
        username: username,
        password: password
      }
    }).toPromise();
  }

  setUserData (data) {
    this.user_data = data;
  }
}
