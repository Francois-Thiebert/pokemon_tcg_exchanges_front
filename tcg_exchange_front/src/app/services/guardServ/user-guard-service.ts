import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserGuardService {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | Observable<boolean>
    | Promise<boolean> {
    // Vérifier si l'utilisateur est connecté (par exemple, vérifier dans le sessionStorage)
    const user = sessionStorage.getItem('user'); // Assurez-vous d'adapter cette logique selon votre implémentation d'authentification
    if (user) {
      return true; // L'utilisateur est authentifié, autoriser l'accès
    } else {
      // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
      this.router.navigate(['/home']);
      return false; // Interdire l'accès
    }
  }
}
