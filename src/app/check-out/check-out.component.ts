import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth.service';
import { OrdersService } from './../orders.service';
import { ShoppincartService } from './../shoppincart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {}; 
  id_shipping;
  userId;
  userSubscription: Subscription;
  
  constructor( private OrdersService: OrdersService, private AuthService: AuthService, private Router: Router, private ShoppincartService: ShoppincartService) { 
    
  }
  ngOnDestroy()
  {
    this.userSubscription.unsubscribe();

  }
  
  
  ngOnInit()
  {
   this.userSubscription= this.AuthService.user$.subscribe(user => this.userId = user.uid );
  }
  
  placeOrder() {
    let cartId = localStorage.getItem('cartId');
    
    
    this.OrdersService.createshipping(this.shipping).subscribe(data => 
      {
      this.id_shipping = data.json().id;
      
      this.OrdersService.createOrder(this.id_shipping,cartId,this.userId).subscribe(data=>{
        this.ShoppincartService.clearCart().subscribe();
        this.Router.navigate(['/order-success', data.json().id]);
      }
      );

      }
    );
   
    console.log(this.id_shipping);
  }  
  
}
