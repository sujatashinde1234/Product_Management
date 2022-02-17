import { Component, OnInit} from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreatecategoryComponent implements OnInit {

  category:Category=new Category();
  submitted=false;
  
  
  
  constructor(private categoryservice:CategoryService,
    private router:Router ,private httpClient:HttpClient,
    private formBuilder:FormBuilder) { }

    
  ngOnInit(): void {
    

   }
      
     newCategory():void {
       this.submitted=false;
       this.category=new Category();
     }
     
     saveCategory(){
      this.categoryservice.createCategory(this.category).subscribe( data =>{
        
        alert("Category added successfully...")
        this.getCategoryList();
      },
      error => console.log(error));
    }
  
    getCategoryList(){
      this.router.navigate(['category']);
    }
    
    OnSubmit(){
      console.log(this.category);
      this.saveCategory();
    }

}
