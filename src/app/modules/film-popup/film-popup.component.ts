import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { FilmInterface } from '../film/film.model';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-film-popup',
  imports: [MatButtonModule, MatDialogClose, MatCardModule, DatePipe, MatChipsModule],
  templateUrl: './film-popup.component.html',
  styleUrl: './film-popup.component.scss'
})
export class FilmPopupComponent {
  readonly dialogRef = inject(MatDialogRef<FilmPopupComponent>);
  data: FilmInterface = inject(MAT_DIALOG_DATA);
}
