import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestion Etudiants';
  data$: Observable<any> = of([]);

  ngOnInit() {
    // Initialisation de data$
  }
}
