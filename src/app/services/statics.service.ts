import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticsService {

  api_url = environment.api_url + 'statics/';

  constructor(
    private http: HttpClient,
  ) { }

  getStaticsForDashboardFirstThreeCard() {
    return this.http.get(this.api_url + 'getStaticsForDashboardFirstThreeCard').toPromise();
  }

  getTotalUsers(range) {
    return this.http.get(this.api_url + 'getTotalUser', {
      params: {
        date_range: range
      }
    }).toPromise();
  }

  getUsersByLockerSize(range) {
    return this.http.get(this.api_url + 'getUsersByLockerSize', {
      params: {
        date_range: range
      }
    }).toPromise();
  }

  getUsersCheckedOutByLockerSize (range) {
    return this.http.get(this.api_url + 'getUsersCheckedOutByLockerSize', {
      params: {
        date_range: range
      }
    }).toPromise();
  }

  getUsersByLang(range) {
    return this.http.get(this.api_url + 'getUsersByLang', {
      params: {
        date_range: range
      }
    }).toPromise();
  }

  getActiveUserData() {
    return this.http.get(this.api_url + 'getActiveUserData').toPromise();
  }

  getUserReport(range) {
    return this.http.get(this.api_url + 'getUserReport', {
      params: {
        date_range: range
      }
    }).toPromise();
  }

  getActiveLockerData () {
    return this.http.get(this.api_url + 'getActiveLockerData').toPromise();
  }

  getAllLockerData () {
    return this.http.get(this.api_url + 'getAllLockerData').toPromise();

  }


}
