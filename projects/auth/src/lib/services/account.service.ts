import { Injectable } from '@angular/core';
import { ApiService } from 'projects/core/src/projects';
import { map } from 'rxjs/operators';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apiService: ApiService) { }

  authenticate(data) {
    return this.apiService.post(Constants.login, data, null).pipe(map(res => {
      return res;
    }));
  }

  register(data) {
    return this.apiService.post(Constants.register, data, null).pipe(map(res => {
      return res;
    }));
  }

  activate(data) {
    return this.apiService.post(Constants.activate, data, null).pipe(map(res => {
      return res;
    }));
  }
}
