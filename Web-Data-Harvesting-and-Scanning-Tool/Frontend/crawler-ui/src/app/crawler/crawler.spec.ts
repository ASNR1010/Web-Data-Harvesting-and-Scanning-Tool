import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crawler } from './crawler';

describe('Crawler', () => {
  let component: Crawler;
  let fixture: ComponentFixture<Crawler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crawler],
    }).compileComponents();

    fixture = TestBed.createComponent(Crawler);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
