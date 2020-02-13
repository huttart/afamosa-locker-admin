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
      params: {
        rfid: rfid
      }
    }).toPromise();
  }

  changeLocker(rfid, locker_id) {
    return this.http.get(this.api_url + 'changeLocker', {
      params: {
        rfid: rfid,
        locker_id: locker_id
      }
    }).toPromise();
  }

  getLogsByLockerID(locker_id, start, end) {
    return this.http.get(this.api_url + 'getLogsByLockerID', {
      params: {
        locker_id: locker_id,
        start: start,
        end:end
      }
    }).toPromise();
  }

  getLogsByUserIDAndLockerID (locker_id, user_id) {
    return this.http.get(this.api_url + 'getLogsByUserIDAndLockerID', {
      params: {
        locker_id: locker_id,
        user_id: user_id,
      }
    }).toPromise();
  }

  getLockerByID(locker_id) {
    return this.http.get(this.api_url + 'getLockerByID', {
      params: {
        locker_id: locker_id
      }
    }).toPromise();
  }

  add(zone_id, title, locker_ids, locker_box, isHigh) {
    return this.http.get(this.api_url + 'add', {
      params: {
        zone_id: zone_id,
        title: title,
        locker_ids: locker_ids,
        locker_box: locker_box,
        isHigh: isHigh
      }
    }).toPromise();
  }

  remove(id) {
    return this.http.get(this.api_url + 'remove', {
      params: {
        id: id
      }
    }).toPromise();
  }

  disable(id) {
    return this.http.get(this.api_url + 'disable', {
      params: {
        id: id
      }
    }).toPromise();
  }

  enable(id) {
    return this.http.get(this.api_url + 'enable', {
      params: {
        id: id
      }
    }).toPromise();
  }

  addZone(title, size) {
    return this.http.get(this.api_url + 'addLockerZone', {
      params: {
        zone_title: title,
        locker_size: size
      }
    }).toPromise();
  }

  disableZone(id) {
    return this.http.get(this.api_url + 'disableZone', {
      params: {
        id: id
      }
    }).toPromise();
  }

  enableZone(id) {
    return this.http.get(this.api_url + 'enableZone', {
      params: {
        id: id
      }
    }).toPromise();
  }

}
