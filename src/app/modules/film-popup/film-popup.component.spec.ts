import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPopupComponent } from './film-popup.component';

describe('FilmPopupComponent', () => {
  let component: FilmPopupComponent;
  let fixture: ComponentFixture<FilmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
