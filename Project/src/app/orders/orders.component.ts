import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderss:Orders[];
  orders=new Orders();
  customername:string;
  constructor(private ordersservice:OrdersService,
    private router:Router) { }

    ngOnInit(): void {
      this.orders=new Orders();
      this.getOrders();
     
    }
  
    private getOrders(){
      this.ordersservice.getOrdersList().subscribe(data => {
        this.orderss = data;
      });
    }
  
    
  
    updateorders(id: number){
      this.router.navigate(['update-orders', id]);
    }
    
  
    deleteorders(id: number){
      this.ordersservice.deleteorders(id).subscribe( data => {
        console.log(data);
        this.getOrders();
      })
    }
   
    search(){
      if(this.customername==""){
      this.ngOnInit();
      }else{
        this.orderss=this.orderss.filter(res=>{
          return res.customername.toLocaleLowerCase().match(this.customername.toLocaleLowerCase());
        })
      }
    }


}
