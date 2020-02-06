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

  getLockerZones() {
    return this.http.get(this.api_url + 'getLockerZones').toPromise();
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

  getLogsByLockerID (locker_id) {
    return this.http.get(this.api_url + 'getLogsByLockerID', {
      params: {
        locker_id: locker_id
      }
    }).toPromise();
  }

  getLockerByID (locker_id) {
    return this.http.get(this.api_url + 'getLockerByID', {
      params: {
        locker_id: locker_id
      }
    }).toPromise();
  }

  add (zone_id, title) {
    return this.http.get(this.api_url + 'add', {
      params: {
        zone_id: zone_id,
        title: title
      }
    }).toPromise();
  }

  remove (id) {
    return this.http.get(this.api_url + 'remove', {
      params: {
        id:id
      }
    }).toPromise();
  }

  disable (id) {
    return this.http.get(this.api_url + 'disable', {
      params: {
        id:id
      }
    }).toPromise();
  }

  enable (id) {
    return this.http.get(this.api_url + 'enable', {
      params: {
        id:id
      }
    }).toPromise();
  }

}
