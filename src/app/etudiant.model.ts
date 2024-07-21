export class Etudiant {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: string;
    email: string;

    constructor(
        id: number = 0, 
        nom: string = '', 
        prenom: string = '', 
        dateNaissance: string = '', 
        email: string = ''
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.email = email;
    }
}
