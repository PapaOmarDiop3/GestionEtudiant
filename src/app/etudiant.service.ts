import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:3000/etudiants'; // URL de votre API

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getEtudiant(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, etudiant);
  }

  updateEtudiant(id: number, etudiant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
