import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketComponent } from './backet.component';

describe('BacketComponent', () => {
  let component: BacketComponent;
  let fixture: ComponentFixture<BacketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
