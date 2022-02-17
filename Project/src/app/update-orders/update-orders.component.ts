import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {

  id:number;
   orders:Orders=new Orders();
 

  constructor(private ordersservice:OrdersService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void
   {
     this.id=this.route.snapshot.params['id'];
     this.ordersservice.getOrdersById(this.id).subscribe(data =>{
      console.log(data)
      this.orders=data;
     },error=>console.log(error));
  }
    
    updateorders(){
      this.ordersservice.updateorders(this.id,this.orders).subscribe(data=>{
        alert("order updated successfully");
        this.orders=new Orders();
        this.gotoOrdersList();
      },error=>console.log(error));
    }

  OnSubmit(){
    this.updateorders();
    
  }
  gotoOrdersList()
  {
    this.router.navigate(['orders']);
  }

}
