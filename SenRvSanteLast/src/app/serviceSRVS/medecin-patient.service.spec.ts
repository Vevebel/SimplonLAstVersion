import { TestBed } from '@angular/core/testing';

import { MedecinPatientService } from './medecin-patient.service';

describe('MedecinPatientService', () => {
  let service: MedecinPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedecinPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
