import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router,Route, ActivatedRoute} from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup,FormControl,Validators,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user:User=new User();
    msg='';
    submitted=false;
    public loginForm:FormGroup
    username:string;
    pass:string;
    
    
    constructor(private userservice:UserService,private router:Router,
    private formBuilder:FormBuilder,private route:ActivatedRoute) { }

    ngOnInit(): void
   {
     }
    
 LoginUser(){
      this.userservice.loginUser(this.user).subscribe(data=>{
        alert("Login successfully");
        this.router.navigate(['products'])
      },
        error=>{
          console.log("Exception Occured..")
        this.msg="invalid username and password";
       }
      );
    }
  

  OnSubmit(){
    this.LoginUser();
    
  }
  

 
}
