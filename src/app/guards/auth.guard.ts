import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from '../services/Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private loginService: LoginService

  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.afAuth.authState
    .pipe(
      take(1),
      map(authState => !! authState ),
      tap( authenticated => {
        if (!authenticated) {
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
