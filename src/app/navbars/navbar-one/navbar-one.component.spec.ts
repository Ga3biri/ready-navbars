import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOneComponent } from './navbar-one.component';

describe('NavbarOneComponent', () => {
  let component: NavbarOneComponent;
  let fixture: ComponentFixture<NavbarOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
