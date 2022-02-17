import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  id:number;
   supplier:Supplier=new Supplier();
 

  constructor(private supplierservice:SupplierService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void
   {
     this.id=this.route.snapshot.params['id'];
     this.supplierservice.getSupplierById(this.id).subscribe(data =>{
      console.log(data)
      this.supplier=data;
     },error=>console.log(error));
  }
    
    updatesupplier(){
      this.supplierservice.updatesupplier(this.id,this.supplier).subscribe(data=>{
        alert("supplier updated successfully");
        this.supplier=new Supplier();
        this.gotoSupplierList();
      },error=>console.log(error));
    }

  OnSubmit(){
    this.updatesupplier();
    
  }
  gotoSupplierList()
  {
    this.router.navigate(['supplier']);
  }

}
