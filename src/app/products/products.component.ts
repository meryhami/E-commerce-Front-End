import { ShoppincartService } from './../shoppincart.service';
import { product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products: product[];
 category : string;
 filtredproduct: any[];
 cart: any;
 Subscription: Subscription;
  constructor( 
    private productService : ProductService,
    private ShoppincartService :ShoppincartService, 
    
     route : ActivatedRoute
    ) { 
     


    this.productService.getAll().switchMap(
      data => {
         this.filtredproduct = this.products = data.json();
         return route.queryParamMap;})
        .subscribe(params => {
          this.category = params.get('category');
          this.filtredproduct = (this.category) ? 
            this.products.filter(p => p.categorie === this.category) : 
            this.products;
            console.log(this.filtredproduct);
            
      });
      
   
    }

  ngOnInit() {
 this.ShoppincartService.getcart().subscribe(cart => this.cart = cart )
      
    
  }
  
}
