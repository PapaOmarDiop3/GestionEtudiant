import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  etudiantForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.etudiantForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      filiere: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.etudiantForm.valid) {
      console.log('Form Submitted!', this.etudiantForm.value);
      // Logic to save student data
    } else {
      console.log('Form not valid');
    }
  }
}
