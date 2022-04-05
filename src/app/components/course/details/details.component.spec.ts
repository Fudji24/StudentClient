import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCourseComponent } from './detailsCourse.component';

describe('DetailsCourseComponent', () => {
  let component: DetailsCourseComponent;
  let fixture: ComponentFixture<DetailsCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
