import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test2Component } from './test2.component';

describe('Test2Component', () => {
  let fixture: ComponentFixture<Test2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test2Component],
      errorOnUnknownElements: true,
    }).compileComponents();
    fixture = TestBed.createComponent(Test2Component);
  });

  it('should exist', () => {
    /*
      This should fail because ChildComponent is not declared in testing module
      and errorOnUnknownElements is turned on. However, the test passes. The
      only difference to Test1Component is that the root element includes
      the Transloco structural directive.
    */
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  xit('should render child', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('child')?.textContent).toContain(
      'Just a child component.'
    );
  });
});
