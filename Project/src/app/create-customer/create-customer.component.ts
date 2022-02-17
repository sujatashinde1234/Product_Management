import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer:Customer=new Customer();
  submitted=false;
  
  
  
  constructor(private customerservice:CustomerService,
    private router:Router ,private httpClient:HttpClient,
    private formBuilder:FormBuilder) { }

    
  ngOnInit(): void {
    

   }
      
     newCustomer():void {
       this.submitted=false;
       this.customer=new Customer();
     }
     
     saveCustomer(){
      this.customerservice.createCustomer(this.customer).subscribe( data =>{
        
        alert("customer added successfully...")
       
        this.getCustomerList();
      },
      error => console.log(error));
    }
  
    getCustomerList(){
      this.router.navigate(['customer']);
    }
    
    OnSubmit(){
      console.log(this.customer);
      this.saveCustomer();
    }

    


}
