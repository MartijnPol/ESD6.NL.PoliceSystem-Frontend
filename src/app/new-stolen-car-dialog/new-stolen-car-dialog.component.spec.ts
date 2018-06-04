import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStolenCarDialogComponent } from './new-stolen-car-dialog.component';

describe('NewStolenCarDialogComponent', () => {
  let component: NewStolenCarDialogComponent;
  let fixture: ComponentFixture<NewStolenCarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStolenCarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStolenCarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
