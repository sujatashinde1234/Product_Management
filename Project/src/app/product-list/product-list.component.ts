import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import  * as $ from 'jquery';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
   name:string;
  constructor(private productservice:ProductService,
    private router:Router) { }

    ngOnInit(): void {
      this.getProducts();
    }
  
    private getProducts(){
      this.productservice.getProductList().subscribe(data => {
        this.products = data;
      });
    }
  
    
  
    updateproduct(id: number){
      this.router.navigate(['update-product', id]);
    }
    productdetails(id:number){
      this.router.navigate(['/product-details',id]);
    }
  
    deleteproduct(id: number){
      this.productservice.deleteproduct(id).subscribe( data => {
        console.log(data);
        this.getProducts();
      })
    }
  search(){
    if(this.name==""){
    this.ngOnInit();
    }else{
      this.products=this.products.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
}
