import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCatalogComponent } from './films-catalog.component';

describe('FilmsCatalogComponent', () => {
  let component: FilmsCatalogComponent;
  let fixture: ComponentFixture<FilmsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
