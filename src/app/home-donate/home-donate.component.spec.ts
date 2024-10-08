import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDonateComponent } from './home-donate.component';

describe('HomeDonateComponent', () => {
  let component: HomeDonateComponent;
  let fixture: ComponentFixture<HomeDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDonateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
