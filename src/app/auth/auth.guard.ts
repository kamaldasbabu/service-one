import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.userDetails$.pipe(
    take(1), // only take one emission
    map(details => {
      if (!details?.token) {
        router.navigate(['/sign-in']);
        return false;
      }

      if (!details?.subscription?.planSubscribed) {
        router.navigate(['/subscribe']);
        return false;
      }

      return true; // ✅ Allowed
    })
  );
};
