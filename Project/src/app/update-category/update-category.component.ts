import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  id:number;
  category:Category=new Category();


 constructor(private categoryservice:CategoryService,private router:Router,
   private route:ActivatedRoute) { }

 ngOnInit(): void
  {
    this.id=this.route.snapshot.params['id'];
    this.categoryservice.getCategoryById(this.id).subscribe(data =>{
      console.log(data)
       this.category=data;
    },error=>console.log(error));
 }
   
   updatecategory(){
     this.categoryservice.updatecategory(this.id,this.category).subscribe(data=>{
       alert("Category updated successfully");
       this.category=new Category();
       this.gotoCategoryList();
     },error=>console.log(error));
   }

 OnSubmit(){
   this.updatecategory();
   
 }
 gotoCategoryList()
 {
   this.router.navigate(['category']);
 }

}
