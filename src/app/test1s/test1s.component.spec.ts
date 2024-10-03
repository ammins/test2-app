import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1sComponent } from './test1s.component';

describe('Test1sComponent', () => {
  let component: Test1sComponent;
  let fixture: ComponentFixture<Test1sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test1sComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
