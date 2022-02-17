import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id:number;
   customer:Customer=new Customer();
 

  constructor(private customerservice:CustomerService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void
   {
     this.id=this.route.snapshot.params['id'];
     this.customerservice.getCustomerById(this.id).subscribe(data =>{
      console.log(data)
      this.customer=data;
     },error=>console.log(error));
  }
    
    updatecustomer(){
      this.customerservice.updatecustomer(this.id,this.customer).subscribe(data=>{
        alert("customer updated successfully");
        this.customer=new Customer();
        this.gotoCustomerList();
      },error=>console.log(error));
    }

  OnSubmit(){
    this.updatecustomer();
    
  }
  gotoCustomerList()
  {
    this.router.navigate(['customer']);
  }

}
