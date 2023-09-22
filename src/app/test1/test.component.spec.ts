import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test1Component } from './test1.component';
import { ChildComponent } from '../child/child.component';

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
    // Fails if ChildComponent is not in declarations AND errorOnUnknownElements === false.
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
