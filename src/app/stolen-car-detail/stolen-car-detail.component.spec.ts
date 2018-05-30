import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolenCarDetailComponent } from './stolen-car-detail.component';

describe('StolenCarDetailComponent', () => {
  let component: StolenCarDetailComponent;
  let fixture: ComponentFixture<StolenCarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolenCarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolenCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
