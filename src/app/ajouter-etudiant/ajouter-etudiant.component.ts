import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  onSubmit(etudiantForm: any) {
    console.log(etudiantForm.value);
  }
}
