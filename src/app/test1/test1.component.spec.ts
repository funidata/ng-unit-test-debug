import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test1Component } from './test1.component';

describe('Test1Component', () => {
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test1Component],
      errorOnUnknownElements: true,
    }).compileComponents();
    fixture = TestBed.createComponent(Test1Component);
  });

  it('should exist', () => {
    // As expected, fails if ChildComponent is not in declarations AND
    // errorOnUnknownElements === true.
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
