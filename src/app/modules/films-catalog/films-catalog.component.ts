import { Component, inject, OnInit } from '@angular/core';
import { FilmInterface } from '../film/film.model';
import { FilmComponent } from '../film/film.component';
import { FilmsCatalogService } from './films-catalog.service';
import { finalize, Observable, tap } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FilmPopupComponent } from '../film-popup/film-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchPipe } from '../pipes/search.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-films-catalog',
  imports: [AsyncPipe, FilmComponent, SearchPipe, ReactiveFormsModule, MatPaginatorModule, SlicePipe],
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

  pageSize: number = 6;
  pageIndex: number = 0;
  length: number = 0;

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    
    this.catalog$ = this.filmsCatalogService.createCatalog().pipe(
      tap((item: FilmInterface[]) => this.length = item.length),
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

  get startIndex(): number {
    return (this.pageIndex) * this.pageSize;
  }

  get endIndex(): number {
    return this.startIndex + this.pageSize;
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
