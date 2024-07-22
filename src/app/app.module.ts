import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';
import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';
import { AccueilComponent } from './accueil/accueil.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEtudiantComponent,
    ListeEtudiantsComponent,
    ModifierEtudiantComponent,
    SupprimerEtudiantComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
