import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private route: Router) { }

  canActivate() {
    return this.auth.user$.map(user => {
      if(user)  return true

      this.route.navigate(['/login']);
      return false;
    });
  }
}
