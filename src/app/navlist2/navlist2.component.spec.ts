import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navlist2Component } from './navlist2.component';

describe('Navlist2Component', () => {
  let component: Navlist2Component;
  let fixture: ComponentFixture<Navlist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navlist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
