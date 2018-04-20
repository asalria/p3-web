import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserroutesComponent } from './userroutes.component';

describe('UserroutesComponent', () => {
  let component: UserroutesComponent;
  let fixture: ComponentFixture<UserroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
