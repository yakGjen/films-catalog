import { Component, inject, OnInit } from '@angular/core';
import { FilmInterface } from '../film/film.model';
import { FilmComponent } from '../film/film.component';
import { FilmsCatalogService } from './films-catalog.service';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-films-catalog',
  imports: [AsyncPipe, FilmComponent],
  templateUrl: './films-catalog.component.html',
  styleUrl: './films-catalog.component.scss'
})
export class FilmsCatalogComponent implements OnInit {
  private spinnerService = inject(SpinnerService);
  private filmsCatalogService = inject(FilmsCatalogService);
  private toastr = inject(ToastrService);
  catalog: FilmInterface[] = [];
  catalog$!: Observable<FilmInterface[]>;

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    
    this.catalog$ = this.filmsCatalogService.createCatalog().pipe(
      finalize(() => this.spinnerService.hideSpinner())
    );
  }

  handleLike(trig: boolean): void {
    this.toastr.success(`Film was ${trig ? 'liked' : 'unliked'}`);
  }
}
