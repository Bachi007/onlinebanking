import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimplesComponent } from './pimples.component';

describe('PimplesComponent', () => {
  let component: PimplesComponent;
  let fixture: ComponentFixture<PimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
