import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEtudiantsComponent } from './afficher-etudiants.component';

describe('AfficherEtudiantsComponent', () => {
  let component: AfficherEtudiantsComponent;
  let fixture: ComponentFixture<AfficherEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherEtudiantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
