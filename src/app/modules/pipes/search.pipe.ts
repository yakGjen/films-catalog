import { Pipe, PipeTransform } from '@angular/core';
import { FilmInterface } from '../film/film.model';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(items: FilmInterface[] | null, searchText: string | null): FilmInterface[] | null {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    
    return items.filter(item => {
      // Поиск по всем текстовым полям карточки
      return item.title.toLowerCase().includes(searchText) ||
             item.description.toLowerCase().includes(searchText) ||
             (item.categories && item.categories.some((tag: string) => 
                tag.toLowerCase().includes(searchText)
             ));
    });
  }

}
