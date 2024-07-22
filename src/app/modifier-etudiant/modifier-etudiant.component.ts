import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {
  etudiant: any = { nom: '', email: '' };
  id: number;

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.etudiantService.getEtudiant(this.id).subscribe(data => {
      this.etudiant = data;
    });
  }

  modifierEtudiant() {
    this.etudiantService.updateEtudiant(this.id, this.etudiant).subscribe(() => {
      this.router.navigate(['/lister-etudiants']);
    });
  }
}
