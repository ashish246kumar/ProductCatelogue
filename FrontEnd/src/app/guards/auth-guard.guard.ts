import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserservicesService } from '../services/userservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserservicesService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated() || this.checkLocalStorage()) {
      return true;
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }

  private checkLocalStorage(): boolean {
    const userData = localStorage.getItem('userData');
    if (userData) {
     
      const user = JSON.parse(userData);
      return true;
    }
    return false;
  }
}
