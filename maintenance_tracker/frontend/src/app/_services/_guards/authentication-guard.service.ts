import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authGuard: AuthenticationService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth();
  }

  checkAuth(): Observable<boolean> {
    return new Observable<boolean>(obs => {
      this.authGuard.is_authenticated().subscribe(
          data => {
            if (!data) {
              this.router.navigate(['/login']);
            } else {
              obs.next(true);
            }
          }, error => {
            console.log('Error getting auth data!!!');
            obs.next(false);
          }
      );
    });
  }
}