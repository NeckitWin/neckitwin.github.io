import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckitwinComponent } from './neckitwin.component';

describe('NeckitwinComponent', () => {
  let component: NeckitwinComponent;
  let fixture: ComponentFixture<NeckitwinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeckitwinComponent]
    });
    fixture = TestBed.createComponent(NeckitwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
