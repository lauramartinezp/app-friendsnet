import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item-list/item.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], atribute: string, name: string ): Item[] {
    if (name && name.trim().length > 0) {
      return items.filter(item => {if (((item[atribute]).toLowerCase()).indexOf(name.trim().toLowerCase()) !== -1) {
        return item[atribute]; }});
    }else {
      return items;
    }
  }

}
