import { Component, OnInit, Output } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';
import { ItemListService } from './item-list.service';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  http: any;

  myItem: Item[];
  busqueda: string;

  constructor(private itemListService: ItemListService, private cartService: CartService) { }

  ngOnInit() {
    this.itemListService.getItemList().subscribe(myItem => this.myItem = myItem);
    // this.myItem = ITEMS;
  }

  /** totalItems() {
     let total = 0;
     // tslint:disable-next-line:prefer-const
     for (let cada of this.myItem) {
       total = cada.stock + total;
     }
     return total;
   }*/
  /**totalItems(){return this.myItem.reduce(function(prev, current) {return prev + current.stock;},0)}*/


  isSelected(id) {
    this.myItem.forEach(element => {
      if (element.id === id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }

  totalItems() {
    return this.myItem ? this.myItem.reduce((prev, current) => prev + current.stock, 0) : 0;
  }

  isEditable(id) {

  }
  addQuantity(item: Item) {
    if (item.stock > 0) {
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

  updateItem(item: Item) {
    this.itemListService.updateItem(item).subscribe();
  }

  addItemToCart(item: Item) {
    this.cartService.addItem(item);
    console.log(this.cartService);
  }


}

