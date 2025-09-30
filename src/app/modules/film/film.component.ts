import { Component, Input } from '@angular/core';
import { FilmInterface } from './film.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-film',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {
  @Input() film!: FilmInterface;

  like(trig: boolean): void {}
}
