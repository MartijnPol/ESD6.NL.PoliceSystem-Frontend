import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStolenVehicleDialogComponent } from './new-stolen-vehicle-dialog.component';

describe('NewStolenVehicleDialogComponent', () => {
  let component: NewStolenVehicleDialogComponent;
  let fixture: ComponentFixture<NewStolenVehicleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStolenVehicleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStolenVehicleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
