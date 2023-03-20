import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldComponent } from './meld.component';

describe('MeldComponent', () => {
  let component: MeldComponent;
  let fixture: ComponentFixture<MeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
