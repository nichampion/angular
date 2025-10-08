import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplCard } from './tpl-card';

describe('TplCard', () => {
  let component: TplCard;
  let fixture: ComponentFixture<TplCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TplCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TplCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
