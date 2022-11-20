import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeColtsComponent } from './home-colts.component';

describe('HomeColtsComponent', () => {
  let component: HomeColtsComponent;
  let fixture: ComponentFixture<HomeColtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeColtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeColtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
