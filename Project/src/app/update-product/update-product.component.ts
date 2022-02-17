import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

   id:number;
   product:Product=new Product();
  

  constructor(private productservice:ProductService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void
   {
     this.id=this.route.snapshot.params['id'];
     this.productservice.getProductById(this.id).subscribe(data =>{
       console.log(data)
       this.product=data;
     },error=>console.log(error));
  }
    
    updateproduct(){
      this.productservice.updateproduct(this.id,this.product).subscribe(data=>{
        alert("product updated successfully");
        this.product=new Product();
        this.gotoProductsList();
      },error=>console.log(error));
     
    }

  OnSubmit(){
    this.updateproduct();
    
  }
  gotoProductsList()
  {
    this.router.navigate(['products']);
  }
}
