import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplCardList } from './tpl-card-list';

describe('TplCardList', () => {
  let component: TplCardList;
  let fixture: ComponentFixture<TplCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TplCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TplCardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
