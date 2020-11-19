import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 categories;
 product = {}; 
 private id;


  constructor(
    private router: Router,
     private Category: CategoryService,
     private productq: ProductService,
     private rout : ActivatedRoute
     ) {
    this.Category.getAll().subscribe(data => {
      this.categories=data.json();
    }
      , err => {console.log(err);
    });
     this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.productq.get(this.id).take(1).subscribe(p => {this.product = p.json()});
    
   
   }

  ngOnInit() {
    
    
      }
 save(product)
 {
   console.log(product);
   if(this.id) this.productq.update(this.id,product).subscribe(response => {
    console.log(response.json());

  });
   else this.productq.create(product)
   .subscribe(response => {
     console.log(response.json());

   });
   

 }

 delete()
 {
   if(!confirm('are you sure you want to delete this produt?')) return;
   
     this.productq.delete(this.id).subscribe();
    this.router.navigate(['/admin/products'])
   
 }
 
 
}
