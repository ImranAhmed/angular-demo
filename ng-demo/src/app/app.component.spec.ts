import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain container class as first element', () => {
    expect(fixture.nativeElement.querySelectorAll('div')[0].classList).toContain('container');
  });

  it('should contain h1 element', () => {
    expect(fixture.nativeElement.querySelectorAll('h1').length).toBe(1);
  });

  it(`should contain page title 'Rest App'`, () => {
    expect(fixture.nativeElement.querySelector('h1').innerText).toBe('Rest App');
  });

  describe('user table', () => {
    it('should contain table of users', () => {
      expect(fixture.nativeElement.querySelectorAll('table').length).toBe(1);
    });

    it('should contain table headers', () => {
      expect(fixture.nativeElement.querySelectorAll('table > thead > tr > th').length).toBe(3);
    });

    it('should contain name table header', () => {
      expect(fixture.nativeElement.querySelectorAll('table > thead > tr > th')[0].innerText).toBe('Name');
    });

    it('should contain email table header', () => {
      expect(fixture.nativeElement.querySelectorAll('table > thead > tr > th')[1].innerText).toBe('Email');
    });

    it('should contain identity table header', () => {
      expect(fixture.nativeElement.querySelectorAll('table > thead > tr > th')[2].innerText).toBe('Identity');
    });
  });
});
