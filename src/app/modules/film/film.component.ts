import { Component, Input, output } from '@angular/core';
import { FilmInterface } from './film.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-film',
  imports: [MatCardModule, MatButtonModule, DatePipe, MatChipsModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {
  @Input() film!: FilmInterface;
  readonly onLike = output<boolean>();

  like(trig: boolean): void {
    this.onLike.emit(trig);
  }
}
