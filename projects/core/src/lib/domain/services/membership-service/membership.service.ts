import { Injectable } from '@angular/core';
import { AuthStorageKeys } from '../../models/auth-storage-keys';
import { AuthResult } from '../../models/auth-result';
import { IMembershipModel } from 'projects/viewmodels/imembership-model';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  membershipModel: IMembershipModel;

  constructor(private cookie: CookieService) { }

  public getAuthResult(): AuthResult {
    const accessToken = localStorage.getItem(AuthStorageKeys.AccessToken);
    return {
      accessToken
    };
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem(AuthStorageKeys.ExpiresAt));
    return new Date().getTime() < expiresAt;
  }

  public login(redirectUri?: string): void {
    this.setRedirectUri(redirectUri);
  }

  public setRedirectUri(redirectUri?: string) {
    if (redirectUri) {
      localStorage.setItem(AuthStorageKeys.RedirectUri, redirectUri);
    } else {
      localStorage.removeItem(AuthStorageKeys.RedirectUri);
    }
  }

  public setCookies(response: IMembershipModel) {
    this.membershipModel = response;
    this.cookie.putObject('userDetails', this.membershipModel);
    this.cookie.putObject('token', this.membershipModel.token);
    localStorage.setItem('access_token', this.membershipModel.token);
  }
}
