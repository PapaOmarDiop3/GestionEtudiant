import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant.model';

@Component({
  selector: 'app-afficher-etudiants',
  templateUrl: './afficher-etudiants.component.html',
  styleUrls: ['./afficher-etudiants.component.css']
})
export class AfficherEtudiantsComponent implements OnInit {
  etudiant: Etudiant | undefined; // Assurez-vous que cette propriété est définie

  constructor() { }

  ngOnInit(): void {
    // Initialisez votre etudiant ici
  }
}
