import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverivewComponent } from './blog-overivew.component';

describe('BlogOverivewComponent', () => {
  let component: BlogOverivewComponent;
  let fixture: ComponentFixture<BlogOverivewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOverivewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOverivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
