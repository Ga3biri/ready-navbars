import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarThreeComponent } from './navbar-three.component';

describe('NavbarThreeComponent', () => {
  let component: NavbarThreeComponent;
  let fixture: ComponentFixture<NavbarThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
