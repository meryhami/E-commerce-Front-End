import { CategoryService } from './../../category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  categorie;
  @Input('category') category;

  constructor(private categoryService: CategoryService) {
    
    this.categoryService.getAll().subscribe(data =>{
      this.categorie = data.json();
    });
      console.log(this.categorie );
    }
   
 
  


  ngOnInit() {
    
    console.log(new Date().getTime());
  }

}
