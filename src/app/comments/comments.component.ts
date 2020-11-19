import { AuthService } from './../auth.service';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsService } from './../comments.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input('content') contentText;
  id;
  userId;
  userSubscription: Subscription;


  constructor(private CommentsService:CommentsService,private Router: ActivatedRoute, private ProductService: ProductService, private AuthService: AuthService) {
    this.id=this.Router.snapshot.paramMap.get('id');
    
   }
save()
{
  this.CommentsService.create(this.id,this.contentText,this.userId).subscribe();
   console.log(this.contentText);
   console.log(this.userId);
  

}
 
  ngOnInit()
  {
  }
  

}


