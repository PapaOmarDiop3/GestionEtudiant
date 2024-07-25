import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AccueilComponent } from './accueil/accueil.component';
// Import other components as necessary

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'ajouter-etudiant', component: AjouterEtudiantComponent },
  // Define other routes as necessary
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AjouterEtudiantComponent,
    AccueilComponent,
    // Declare other components as necessary
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
