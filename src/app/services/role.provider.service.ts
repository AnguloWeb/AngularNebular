import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleProviderService implements NbRoleProvider {

  constructor(private authService: NbAuthService) { }

  getRole(): Observable<string | string[]> {
    return this.authService.onTokenChange()
    .pipe(
      map((token: NbAuthJWTToken | any) => {
        return token.getPayload()['role'] || 'guest';
      }),
    );
  }
}
