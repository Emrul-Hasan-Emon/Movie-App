import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderworkComponent } from './underwork.component';

describe('UnderworkComponent', () => {
  let component: UnderworkComponent;
  let fixture: ComponentFixture<UnderworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderworkComponent]
    });
    fixture = TestBed.createComponent(UnderworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
