import { Injectable } from '@angular/core';
import { Role } from './../../model/role';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/model/user";

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService {
  constructor(private router: Router) {}

  user: User  = JSON.parse(
    sessionStorage.getItem('user')!
  )

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | boolean
      | Observable<boolean>
      | Promise<boolean> {
      // Vérifier si l'utilisateur est connecté (par exemple, vérifier dans le sessionStorage)
      if (this.user.role === Role.ROLE_ADMIN) {
        return true; // L'utilisateur est authentifié, autoriser l'accès
      } else {
        // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
        this.router.navigate(['/home']);
        return false; // Interdire l'accès
      }
    }
}
