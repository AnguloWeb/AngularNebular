import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationAuthGuard implements CanActivate {
  constructor(
    private authService: NbAuthService,
    private router: Router
  ) {
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve => {
        this.authService.isAuthenticated().subscribe(resp => {
          if (resp) {
            this.router.navigate(['/main']);
          }
          resolve(!resp);
        });
      });
  }
  
}
