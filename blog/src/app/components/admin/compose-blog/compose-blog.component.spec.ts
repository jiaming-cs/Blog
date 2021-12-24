import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeBlogComponent } from './compose-blog.component';

describe('ComposeBlogComponent', () => {
  let component: ComposeBlogComponent;
  let fixture: ComponentFixture<ComposeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
