import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductdetailsComponent implements OnInit {

  id: number
  product:Product
  constructor(private route: ActivatedRoute, private productservice:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product=new Product();
    this.productservice.getProductById(this.id).subscribe( data => {
      this.product=data;
    });
  }

 


}
