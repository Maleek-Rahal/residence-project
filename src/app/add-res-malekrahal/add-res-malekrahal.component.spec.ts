import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResMalekrahalComponent } from './add-res-malekrahal.component';

describe('AddResMalekrahalComponent', () => {
  let component: AddResMalekrahalComponent;
  let fixture: ComponentFixture<AddResMalekrahalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddResMalekrahalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResMalekrahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
