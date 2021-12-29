import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularTestComponent } from './nebular-test.component';

describe('NebularTestComponent', () => {
  let component: NebularTestComponent;
  let fixture: ComponentFixture<NebularTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
