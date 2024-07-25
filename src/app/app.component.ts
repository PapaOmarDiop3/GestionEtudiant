import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-etudiants';

  constructor(private router: Router) {}

  goToAccueil() {
    this.router.navigate(['/accueil']);
  }
  
  ajouterEtudiant() {
    this.router.navigate(['/ajouter-etudiant']);
  }
  
  listeEtudiants() {
    this.router.navigate(['/liste-etudiants']);
  }
  
  modifierEtudiant() {
    this.router.navigate(['/modifier-etudiant']);
  }
  
  supprimerEtudiant() {
    this.router.navigate(['/supprimer-etudiant']);
  }
}  