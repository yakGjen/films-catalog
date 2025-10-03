import { Component, inject, OnInit } from '@angular/core';
import { FilmInterface } from '../film/film.model';
import { FilmComponent } from '../film/film.component';
import { FilmsCatalogService } from './films-catalog.service';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FilmPopupComponent } from '../film-popup/film-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchPipe } from '../pipes/search.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-films-catalog',
  imports: [AsyncPipe, FilmComponent, SearchPipe, ReactiveFormsModule],
  templateUrl: './films-catalog.component.html',
  styleUrl: './films-catalog.component.scss'
})
export class FilmsCatalogComponent implements OnInit {
  private spinnerService = inject(SpinnerService);
  private filmsCatalogService = inject(FilmsCatalogService);
  private toastr = inject(ToastrService);
  readonly dialog = inject(MatDialog);
  catalog: FilmInterface[] = [];
  catalog$!: Observable<FilmInterface[]>;

  searchControl = new FormControl('');

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    
    this.catalog$ = this.filmsCatalogService.createCatalog().pipe(
      finalize(() => this.spinnerService.hideSpinner())
    );
  }

  handleLike(trig: boolean): void {
    this.toastr.success(`Film was ${trig ? 'liked' : 'unliked'}`);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, film: FilmInterface): void {
    this.dialog.open(FilmPopupComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: film
    });
  }
}
