import { async } from '@angular/core/testing';
import { quantitypro } from './models/quantitypro';
import { projection } from './models/projection';
import { product } from './models/product';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/take';
import { error } from 'util';
@Injectable()
export class ShoppincartService {
 
  qauntity: number;
  productid : number;
  qauntityList: Array<quantitypro> = [];
  itemm;

  constructor(private Http: Http) { }


getitems(productId: number)
{
  let cartId = localStorage.getItem('cartId');
  return this.Http.get('http://localhost:8080/projections/q/'+ productId+'/'+ cartId);
}
getAll()
{
  let cartId = localStorage.getItem('cartId');

  return this.Http.get('http://localhost:8080/projections/produit/m/'+cartId);
}

  private create()
  {
   return  this.Http.post('http://localhost:8080/shoppint-cart',{
      datecreated: new Date().getTime()

    });

  }
  clearCart()
  {
    let cartId = localStorage.getItem('cartId');

    return this.Http.delete('http://localhost:8080/projections/'+cartId);
  }

    getcart()
  {
    let cartId =   this.getOrcreat();
    return this.Http.get('http://localhost:8080/shoppint-cart/' + cartId);
  }

  getItem(cartId: string , productId: number)
  {
    return this.Http.get('http://localhost:8080/projections/'+productId+'/'+cartId);

  }

  private  getOrcreat()
  {
    let cartId= localStorage.getItem('cartId');
  if(!cartId)
    {
      this.create().subscribe(response =>
      {
         localStorage.setItem('cartId', response.json().id);
         return response.json().id;
       }
        );
    }
    else return cartId;
  

  }

  removefromcart(product: product)
  {
    
    let cartId = this.getOrcreat();
  
    let item$ = this.getItem(cartId,product.id);
    item$.take(1).subscribe(item => { 
      
      if(item.json().length >0 )
      {
        

        return this.Http.put('http://localhost:8080/projections/'+item.json()[0].id+'/'+product.id+'/'+cartId, { quantity: item.json()[0].quantity - 1 }).subscribe(
       );
        
      }

  })
}

countItems(cartId: String)
{
  return this.Http.get('http://localhost:8080/projections/count/'+cartId);
}
   
  addtocart(product: product )
  {
  
  
    let cartId = this.getOrcreat();
  
    let item$ = this.getItem(cartId,product.id);
    item$.take(1).subscribe(item => { 
      
      if(item.json().length >0 )
      {
        

        return this.Http.put('http://localhost:8080/projections/'+item.json()[0].id+'/'+product.id+'/'+cartId, { quantity: item.json()[0].quantity + 1 }).subscribe(
       );
        
      }
      else {

        return this.Http.post('http://localhost:8080/projections/'+product.id+'/'+cartId,
    {
      
    }
    ).subscribe(
    );
    

      }
      }
      );
     ;
      
      
      
    
    
    

    
   
    
    


  }
}
