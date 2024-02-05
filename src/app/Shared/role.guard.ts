import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
   const router = inject(Router);
   if (authService.HaveAccess()) {
     return true;
   } else {
     router.navigate(['']);
     return false;
   }
};
