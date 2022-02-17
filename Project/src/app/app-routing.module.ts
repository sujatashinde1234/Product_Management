import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CreatecategoryComponent } from './create-category/create-category.component';
import { UpdatecategoryComponent } from './update-category/update-category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'create-product',component:CreateProductComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'product-details/:id',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent},
  {path:'create-category',component:CreatecategoryComponent},
  {path:'update-category/:id',component:UpdatecategoryComponent},
  {path:'supplier',component:SupplierComponent},
  {path:'create-supplier',component:CreateSupplierComponent},
  {path:'update-supplier/:id',component:UpdateSupplierComponent},
  {path:'customer',component:CustomerComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'update-customer/:id',component:UpdateCustomerComponent},
  {path:'orders',component:OrdersComponent},
  {path:'create-orders',component:CreateOrdersComponent},
  {path:'update-orders/:id',component:UpdateOrdersComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
