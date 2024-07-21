import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {
  etudiant: any = {};  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.etudiant = this.etudiantService.getEtudiantById(+id) || new Etudiant(); // Initialiser avec une instance par défaut si non trouvé
    }
  }

  modifierEtudiant(form: any): void {
    if (this.etudiant.id) {
      const updatedEtudiant: Etudiant = {
        ...this.etudiant,
        nom: form.value.nom,
        prenom: form.value.prenom,
        dateNaissance: form.value.dateNaissance,
        email: form.value.email
      };
      this.etudiantService.updateEtudiant(this.etudiant.id, updatedEtudiant);
      this.router.navigate(['/']);
    }
  }
}
