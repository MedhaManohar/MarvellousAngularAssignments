import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageToDisplayComponent } from './no-page-to-display.component';

describe('NoPageToDisplayComponent', () => {
  let component: NoPageToDisplayComponent;
  let fixture: ComponentFixture<NoPageToDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageToDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPageToDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
