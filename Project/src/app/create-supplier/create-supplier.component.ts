import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  supplier:Supplier=new Supplier();
  submitted=false;
  
  
  
  constructor(private supplierservice:SupplierService,
    private router:Router ,private httpClient:HttpClient,
    private formBuilder:FormBuilder) { }

    
  ngOnInit(): void {
    

   }
      
     newSupplier():void {
       this.submitted=false;
       this.supplier=new Supplier();
     }
     
     saveSupplier(){
      this.supplierservice.createSupplier(this.supplier).subscribe( data =>{
        
        alert("supplier added successfully...")
       
        this.getSupplierList();
      },
      error => console.log(error));
    }
  
    getSupplierList(){
      this.router.navigate(['supplier']);
    }
    
    OnSubmit(){
      console.log(this.supplier);
      this.saveSupplier();
    }

    
}
