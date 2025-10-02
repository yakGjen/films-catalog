import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { FilmInterface } from "../film/film.model";

@Injectable({
  providedIn: 'root'
})
export class FilmsCatalogService {
  createCatalog(): Observable<FilmInterface[]> {
    const catalog: FilmInterface[] = [];

    for (let i = 0; i < 30; i++) {
      catalog.push({
        id: i,
        title: `Title - ${i}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        premiereDate: new Date(),
        picture: null,
        categories: ['фантастика', 'боевик']
      });
    }

    return of(catalog).pipe(delay(4000));
  }
  
}