import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  totalPrice(item: Item) {
    return item.price * item.quantity;

  }
}
