import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCompFilhoComponent } from './second-comp-filho.component';

describe('SecondCompFilhoComponent', () => {
  let component: SecondCompFilhoComponent;
  let fixture: ComponentFixture<SecondCompFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCompFilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCompFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
