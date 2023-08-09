import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('access_token')) {
    return true;
  }
  const router: Router = inject(Router);
  router.navigate(['/login']);
  return false;
};
