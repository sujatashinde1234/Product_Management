import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers:Supplier[];
   name:string;
  constructor(private supplierservice:SupplierService,
    private router:Router) { }

    ngOnInit(): void {
      this.getSuppliers();
    }
  
    private getSuppliers(){
      this.supplierservice.getSupplierList().subscribe(data => {
        this.suppliers = data;
      });
    }
   updatesupplier(id: number){
      this.router.navigate(['update-supplier', id]);
    }
    
  
    deletesupplier(id: number){
      this.supplierservice.deletesupplier(id).subscribe( data => {
        console.log(data);
        this.getSuppliers();
      })
    }
    search(){
      if(this.name==""){
      this.ngOnInit();
      }else{
        this.suppliers=this.suppliers.filter(res=>{
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
      }
    }
}
