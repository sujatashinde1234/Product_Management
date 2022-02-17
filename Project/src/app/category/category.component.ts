import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys:Category[];
   
  constructor(private categoryservice:CategoryService,
    private router:Router) { }

    ngOnInit(): void {
      this.getCategorys();
    }
  
    private getCategorys(){
      this.categoryservice.getCategoryList().subscribe(data => {
        this.categorys = data;
      });
    }
  
    
  
    updatecategory(id: number){
      this.router.navigate(['update-category', id]);
    }
    
  
    deletecategory(id: number){
      this.categoryservice.deletecategory(id).subscribe( data => {
        console.log(data);
        this.getCategorys();
      })
    }

}
