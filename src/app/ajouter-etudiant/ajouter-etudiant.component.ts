import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  etudiant = {
    nom: '',
    email: ''
  };

  ajouterEtudiant() {
    // Logique pour ajouter un étudiant
    console.log('Étudiant ajouté:', this.etudiant);
  }
}
