import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../etudiant.model';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  etudiant: Etudiant = new Etudiant();

  constructor(
    private etudiantService: EtudiantService,
    private router: Router
  ) {}

  ajouterEtudiant(form: any): void {
    const newEtudiant: Etudiant = {
      id: this.etudiantService.getEtudiants().length + 1,
      nom: form.value.nom,
      prenom: form.value.prenom,
      dateNaissance: form.value.dateNaissance,
      email: form.value.email
    };
    this.etudiantService.addEtudiant(newEtudiant);
    this.router.navigate(['/']);
  }
}
