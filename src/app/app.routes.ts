import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';
import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';

export const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ajouter-etudiant', component: AjouterEtudiantComponent },
  { path: 'liste-etudiants', component: ListeEtudiantsComponent },
  { path: 'modifier-etudiant', component: ModifierEtudiantComponent },
  { path: 'supprimer-etudiant', component: SupprimerEtudiantComponent },
];
