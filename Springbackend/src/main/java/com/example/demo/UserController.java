package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class UserController 
{
	@Autowired
	private UserRepository ur;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return ur.findAll();
	}	
	
	
	
	
	 @PostMapping("users/registration")
	  public User createUser(@RequestBody User U) throws Exception {
		 
		User uobj=ur.save(U);
		return uobj;
	  }
	  
	 
	 
	 @PostMapping("users/login")//login
	 public User loginUser(@RequestBody User U) throws Exception {
		 String tempusername=U.getUsername();
		 String temppass=U.getPassword();
		 User uobj=null;
		 if(tempusername!=null && temppass!=null) {
			uobj=ur.findByUsernameAndPassword(tempusername, temppass);
		 }
		 if(uobj==null) {
			 throw new Exception("Bad Credentials");
		 }
		 
		 return uobj;
		 
	 }

}
