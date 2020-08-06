import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOffenseComponent } from './offense.component';

describe('PlayerOffenseComponent', () => {
  let component: PlayerOffenseComponent;
  let fixture: ComponentFixture<PlayerOffenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerOffenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOffenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
