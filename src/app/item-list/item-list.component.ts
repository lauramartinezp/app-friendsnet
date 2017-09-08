import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItem: Item[];

  constructor() { }

  ngOnInit() {
    this.myItem = ITEMS;
  }

  totalItems() {
    let total = 0;
    for (let cada of this.myItem) {
      total = cada.stock + total;
    }
    return total;
  }
    /**totalItems(){return this.myItem.reduce(function(prev, current) {return prev + current.stock;},0)}*/
  /**totalItems(){return this.myItem.reduce((prev, current) => prev + current.stock, 0)} */
  isSelected(id) {
    this.myItem.forEach(element => {
      if (element.id === id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }
  addQuantity(item: Item) {
    if (item.stock > 0 ) {
      item.quantity++;
      item.stock--;
    }

    console.log(item.quantity);
  }

  downQuantity(item: Item) {

    if (item.quantity > 0) {
      item.quantity--;
      item.stock++;
    }

    console.log(item.quantity);

  }
  showKey(event) {

  }
}
