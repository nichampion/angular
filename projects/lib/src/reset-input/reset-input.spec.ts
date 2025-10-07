import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetInput } from './reset-input';

describe('ResetInput', () => {
  let component: ResetInput;
  let fixture: ComponentFixture<ResetInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
