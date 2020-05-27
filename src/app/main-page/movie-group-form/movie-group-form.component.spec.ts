import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGroupFormComponent } from './movie-group-form.component';

describe('MovieGroupFormComponent', () => {
  let component: MovieGroupFormComponent;
  let fixture: ComponentFixture<MovieGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
