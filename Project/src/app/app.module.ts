import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProductService } from './product.service';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductdetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { CategoryComponent } from './category/category.component';
import { UpdatecategoryComponent } from './update-category/update-category.component';
import { CreatecategoryComponent } from './create-category/create-category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProductdetailsComponent,
    LoginComponent,
    CategoryComponent,
    UpdatecategoryComponent,
    CreatecategoryComponent,
    SupplierComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent,
    CustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    OrdersComponent,
    CreateOrdersComponent,
    UpdateOrdersComponent,
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [ProductService,NgModule,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
