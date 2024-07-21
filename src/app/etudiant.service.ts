import { Injectable } from '@angular/core';
import { Etudiant } from './etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = [];

  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }

  getEtudiantById(id: number): Etudiant | undefined {
    return this.etudiants.find(etudiant => etudiant.id === id);
  }

  addEtudiant(etudiant: Etudiant): void {
    this.etudiants.push(etudiant);
  }

  updateEtudiant(id: number, updatedEtudiant: Etudiant): void {
    const index = this.etudiants.findIndex(etudiant => etudiant.id === id);
    if (index !== -1) {
      this.etudiants[index] = updatedEtudiant;
    }
  }
}
