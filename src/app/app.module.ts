import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Assurez-vous que FormsModule est importé
import { AppRoutingModule } from './app-routing.module'; // Import du module de routage
import { AppComponent } from './app.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEtudiantComponent,
    ListeEtudiantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Assurez-vous que FormsModule est importé
    AppRoutingModule // Ajout du module de routage aux imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
