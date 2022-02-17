import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product=new Product();
  submitted=false;
  
  
  
  constructor(private productservice:ProductService,
    private router:Router ,private httpClient:HttpClient,
    private formBuilder:FormBuilder) { }

    
  ngOnInit(): void {
    

   }
      
     newProduct():void {
       this.submitted=false;
       this.product=new Product();
     }
     
     saveProduct(){
      this.productservice.createProduct(this.product).subscribe( data =>{
        
        alert("product added successfully...")
       
        this.getProductList();
      },
      error => console.log(error));
    }
  
    getProductList(){
      this.router.navigate(['products']);
    }
    
    OnSubmit(){
      console.log(this.product);
      this.saveProduct();
    }

    
    
   }
