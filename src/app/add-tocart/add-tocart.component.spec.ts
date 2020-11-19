import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTocartComponent } from './add-tocart.component';

describe('AddTocartComponent', () => {
  let component: AddTocartComponent;
  let fixture: ComponentFixture<AddTocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
