import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url = environment.api_url + 'user/';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  register(rfid, locker_size) {
    return this.http.get(this.api_url + 'register', {
      params: {
        rfid: rfid,
        locker_size: locker_size
      }
    }).toPromise();
  }

  getUserLockerData(rfid) {
    return this.http.get(this.api_url + 'getUserLockerData', {
      params: {
        rfid: rfid
      }
    }).toPromise();
  }

  checkout(rfid, locker_id) {
    return this.http.get(this.api_url + 'checkout', {
      params: {
        rfid: rfid,
        locker_id: locker_id
      }
    }).toPromise();
  }


}
