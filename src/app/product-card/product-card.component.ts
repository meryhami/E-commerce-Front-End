import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { projection } from './../models/projection';
import { ShoppincartService } from './../shoppincart.service';
import { product } from './../models/product';

import 'rxjs/add/operator/take';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') ShoppingCart;
  quantity: number;
 
  constructor(private ShoppincartService: ShoppincartService,private Router:Router) {
    
   }
  addcart()
  {
    this.ngOnInit();
   this.ShoppincartService.addtocart(this.product);
   
}
getQuantity()
{

   this.ShoppincartService.getitems(this.product.id).subscribe(data =>
    {  

      if(data.json().toString() === "")
  {
    this.quantity = 0;
  }
  else
  {
      this.quantity = data.json();
      console.log(data.json());
      console.log(this.quantity.toString());
 
  }
      
    });

 

}
myFunction(product)
{
  this.Router.navigate(['admin/productDetails/', product.id]);
  console.log(product.imageUrl);
}


ngOnInit()
{
  this.getQuantity();
}

}
