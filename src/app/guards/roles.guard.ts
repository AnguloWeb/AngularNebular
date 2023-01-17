import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(public accessChecker: NbAccessChecker, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // return this.accessChecker.isGranted('view','profile');

    return new Promise(resolve => {
      this.accessChecker.isGranted('view', route.routeConfig?.path || '').subscribe(resp => {
        if (!resp) {
          this.router.navigate(['/auth/login']);
        }
        resolve(resp);
      });
    });
  }
  
}
