import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcaroComponent } from './navcaro.component';

describe('NavcaroComponent', () => {
  let component: NavcaroComponent;
  let fixture: ComponentFixture<NavcaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcaroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
