import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResMalekrahalComponent } from './detail-res-malekrahal.component';

describe('DetailResMalekrahalComponent', () => {
  let component: DetailResMalekrahalComponent;
  let fixture: ComponentFixture<DetailResMalekrahalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailResMalekrahalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailResMalekrahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
