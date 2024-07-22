import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-supprimer-etudiant',
  templateUrl: './supprimer-etudiant.component.html',
  styleUrls: ['./supprimer-etudiant.component.css']
})
export class SupprimerEtudiantComponent implements OnInit {
  id: number;

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.supprimerEtudiant();
  }

  supprimerEtudiant() {
    this.etudiantService.deleteEtudiant(this.id).subscribe(() => {
      this.router.navigate(['/lister-etudiants']);
    });
  }
}
