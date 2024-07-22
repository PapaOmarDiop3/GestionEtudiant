import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {
  etudiant = { nom: '', email: '' };  // Définir les propriétés nécessaires

  ngOnInit(): void {
    // Code pour initialiser les données
  }

  modifierEtudiant(): void {
    // Code pour modifier l'étudiant
  }
}
