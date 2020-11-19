import { product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit  {
  products : product[];
  filtredprodect : any[];
  subscription : Subscription;
  tableResources : DataTableResource<product>;
  items : product[] = [];
  itemCount: number;
  constructor(private productService: ProductService) { 

    this.subscription = this.productService.getAll().subscribe(data => {
     this.filtredprodect = this.products=data.json(); 
     this.initializeTable(this.products);
    }
      , err => {console.log(err);
    });
  }

  private initializeTable(products:product[])
  {
    this.tableResources = new DataTableResource(products);
     this.tableResources.query({ offset:0 })
     .then(items => this.items = items );
     this.tableResources.count()
     .then(count => this.itemCount = count);

  }
 
  reloadItems(params)
{
  if(!this.tableResources) return;
  this.tableResources.query(params)
  .then(items => this.items = items );
}

  ngOnInit() {
  }

  filter(query : String )
  {

    this.filtredprodect = (query) ?
      this.products.filter(p =>p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
      this.initializeTable(this.filtredprodect);
     
    console.log(query.toLowerCase());
 


  }

ngOnDestroy()
{

}

}
