import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LockerService {
  api_url = environment.api_url + 'locker/';
  locker_size_options;

  constructor(
    private http: HttpClient,
  ) { }

  getLockerSizeOptions() {
    return this.http.get(this.api_url + 'getLockerSizeOptions').toPromise();
  }

  activateLockerByRfid(rfid) {
    return this.http.get(this.api_url + 'getLockerSizeOptions', {
      params : {
        rfid: rfid
      }
    }).toPromise();
  }

  changeLocker (rfid, locker_id) {
    return this.http.get(this.api_url + 'changeLocker', {
      params: {
        rfid: rfid,
        locker_id: locker_id
      }
    }).toPromise();
  }

}
