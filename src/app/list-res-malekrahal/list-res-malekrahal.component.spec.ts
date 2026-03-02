import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResMalekrahalComponent } from './list-res-malekrahal.component';

describe('ListResMalekrahalComponent', () => {
  let component: ListResMalekrahalComponent;
  let fixture: ComponentFixture<ListResMalekrahalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResMalekrahalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResMalekrahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
