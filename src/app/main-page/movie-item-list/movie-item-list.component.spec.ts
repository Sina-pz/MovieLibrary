import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemListComponent } from './movie-item-list.component';

describe('MovieItemListComponent', () => {
  let component: MovieItemListComponent;
  let fixture: ComponentFixture<MovieItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
