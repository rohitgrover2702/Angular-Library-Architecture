import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KobeServicesComponent } from './kobe-services.component';

describe('KobeServicesComponent', () => {
  let component: KobeServicesComponent;
  let fixture: ComponentFixture<KobeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KobeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KobeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
