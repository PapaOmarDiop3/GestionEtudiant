import { Component, OnInit } from '@angular/core';

interface Etudiant {
  nom: string;
  email: string;
}

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit {
  etudiants: Etudiant[] = [];  // Définir le type pour la liste

  ngOnInit(): void {
    // Initialisation des données
    this.etudiants = [
      { nom: 'John Doe', email: 'john.doe@example.com' },
      // Ajoutez d'autres étudiants ici
    ];
  }
}
