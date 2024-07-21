import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../etudiant.model';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit() {
    this.etudiants = this.etudiantService.getEtudiants();
  }
}
