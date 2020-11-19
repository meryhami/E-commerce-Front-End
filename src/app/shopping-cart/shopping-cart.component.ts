import { quantitypro } from './../models/quantitypro';
import { product } from './../models/product';

import { Http } from '@angular/http';
import { ShoppincartService } from './../shoppincart.service';

import { Component, OnInit, Input } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  TotalItem;
  products: quantitypro[];
  product : product;
  TotalePrice;
  


  
  constructor(private shoppincartService : ShoppincartService) { }
coutItems()
{
  let cartId = localStorage.getItem('cartId');
  this.shoppincartService.countItems(cartId).subscribe(
    total => this.TotalItem = total.json()
  )
 
}


getProductsId()
{

 
  this.shoppincartService.getAll().subscribe(
    data => 
    {
    this.products = data.json();
    console.log(data);
    let sum=0;
    for(let products in this.products)
    {
      sum += this.products[products].price*this.products[products].quantity;
     
    }
    console.log(sum);
    this.TotalePrice=sum;
    
     
    })
}
clearCart()
{
 this.shoppincartService.clearCart().subscribe(); 
 this.ngOnInit();
}

  

 ngOnInit() {

    this.coutItems();
    
  
    this.getProductsId();
   

  }

}
