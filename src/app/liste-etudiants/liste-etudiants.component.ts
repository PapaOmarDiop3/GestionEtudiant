import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent {
  etudiants = [
    { nom: 'John Doe', email: 'john.doe@example.com' },
    { nom: 'Jane Smith', email: 'jane.smith@example.com' }
  ];
}
