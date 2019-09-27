import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KobePipesComponent } from './kobe-pipes.component';

describe('KobePipesComponent', () => {
  let component: KobePipesComponent;
  let fixture: ComponentFixture<KobePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KobePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KobePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
