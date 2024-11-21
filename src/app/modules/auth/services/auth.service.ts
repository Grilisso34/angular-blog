import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AuthIdentificated = false;

  login() {
    this.AuthIdentificated = true;
  }

  logout() {
    this.AuthIdentificated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.AuthIdentificated;
  }

  constructor() {}
}
