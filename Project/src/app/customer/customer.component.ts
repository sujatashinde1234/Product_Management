import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[];
   name:string;
  constructor(private customerservice:CustomerService,
    private router:Router) { }

    ngOnInit(): void {
      this.getCustomers();
    }
  
    private getCustomers(){
      this.customerservice.getCustomerList().subscribe(data => {
        this.customers = data;
      });
    }
  
    
  
    updatecustomer(id: number){
      this.router.navigate(['update-customer', id]);
    }
    
  
    deletecustomer(id: number){
      this.customerservice.deletecustomer(id).subscribe( data => {
        console.log(data);
        this.getCustomers();
      })
    }
    search(){
      if(this.name==""){
      this.ngOnInit();
      }else{
        this.customers=this.customers.filter(res=>{
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
      }
    }

}
