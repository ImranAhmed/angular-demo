import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should create', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getUsers', () => {

    it('should return users',
      inject([DataService, HttpTestingController], (service: DataService, mockBackend: HttpTestingController) => {

        const mockResponse = {};

        // Act
        service.getUsers().subscribe((data) => {

          // Assert
          expect(data).toBeDefined();
          expect(data).toEqual(mockResponse);
        });

        const req = mockBackend.expectOne(`https://reqres.in/api/users`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
      }));
  });
});
