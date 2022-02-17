import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import {Orders} from '../orders';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {

  orders:Orders=new Orders();
  submitted=false;
  
  
  
  
  constructor(private ordersservice:OrdersService,
    private router:Router ,private httpClient:HttpClient,
    private formBuilder:FormBuilder) { }

    
  ngOnInit(): void {
    

   }
      
     newOrders():void {
       this.submitted=false;
       this.orders=new Orders();
     }
     
     saveOrders(){
      this.ordersservice.createOrders(this.orders).subscribe( data =>{
        
        alert("order added successfully...")
        this.getOrdersList();
      },
      error => console.log(error));
    }
  
    getOrdersList(){
      this.router.navigate(['orders']);
    }
    
    OnSubmit(){
      console.log(this.orders);
      this.saveOrders();
    }

}
