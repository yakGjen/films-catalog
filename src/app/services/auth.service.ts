import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private loggedIn: boolean = false;

  

  private user: any = {};

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(status: boolean): void {
    this.loggedIn = status;
  }

  login(): Observable<boolean> {
    return of(true).pipe(delay(3000));
  }

  logout(): Observable<boolean> {
    this.loggedIn = false;
    this.router.navigate(['/']);

    return of(false);
  }

  setUserData(userData: any = {}): void {
    this.user = userData.user;
  }

  clearUserData(): void {
    this.user = null;
  }
}
