import { product } from './models/product';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private Http:Http) { }
  create(product)
  {
    return this.Http.post('http://localhost:8080/produits', product);

  }
  getAll()
  {
    return this.Http.get('http://localhost:8080/produits');
  }
  get(productId)
  {
    return this.Http.get('http://localhost:8080/produits/'+productId);
  }

  update(productId,product)
  {
    return this.Http.put('http://localhost:8080/produits/'+productId,product);
  }

  delete(productId)
  {
    return this.Http.delete('http://localhost:8080/produits/'+productId);

  }


}
