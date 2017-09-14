import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchPipe } from './search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { HttpModule } from '@angular/http';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { CartService } from './cart/cart.service';

const appRoutes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'item-list', component: ItemListComponent  },
  { path: '', component: ItemListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    SearchPipe,
    CartComponent,
    OrderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
