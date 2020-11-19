import { comment } from './../models/comment';
import { ShoppincartService } from './../shoppincart.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth.service';
import { CommentsService } from './../comments.service';
import { ProductService } from './../product.service';
import { product } from './../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product:product;
  contentText;
  id;
  userSubscription: Subscription;
  userId;
  quantity: number;
  content;
  comment:{};
  

  

  constructor(private Router: ActivatedRoute,private ProductService:ProductService,private CommentsService: CommentsService,private AuthService:AuthService,private ShoppincartService: ShoppincartService) {
    this.id=this.Router.snapshot.paramMap.get('id');
    //this.ProductService.get(this.id).subscribe(
      //data => 
      //{
       // this.product=data.json();
        //this.comment=this.product.comments
        
     // }
  //  )


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
   save()
   {
     this.CommentsService.create(this.id,this.contentText,this.userId).subscribe();

   }
   goBack()
   {
     window.history.back();
   }

  
   ngOnInit()
   {
    
   
   }
   

}
