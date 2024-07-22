import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

const routes: Routes = [
  { path: 'ajouter', component: AjouterEtudiantComponent },
  { path: 'liste', component: ListeEtudiantsComponent },
  { path: '', redirectTo: '/ajouter', pathMatch: 'full' } // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
