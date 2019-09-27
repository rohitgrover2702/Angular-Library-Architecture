import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KobeComponentsComponent } from './kobe-components.component';

describe('KobeComponentsComponent', () => {
  let component: KobeComponentsComponent;
  let fixture: ComponentFixture<KobeComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KobeComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KobeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
