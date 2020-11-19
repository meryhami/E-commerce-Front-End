import { Router } from '@angular/router';
import { ShoppincartService } from './../shoppincart.service';
import { Component, OnInit, Input } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product;
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

  console.log(this.product);
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
removefromcart()
{
  this.ngOnInit();

  this.ShoppincartService.removefromcart(this.product);
}

ngOnInit()
{
  this.getQuantity();
}


}
