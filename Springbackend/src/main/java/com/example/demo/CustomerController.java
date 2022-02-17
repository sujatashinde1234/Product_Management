package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class CustomerController 
{
	
	@Autowired
	private CustomerRepository crepo; 
	
	
	
	@GetMapping("/customer")
	public List<Customer> getAllCustomer(){
		return crepo.findAll();
	}		
	
	
	@PostMapping("/customer")
	public Customer createCustomer(@RequestBody Customer C) {
		
		return crepo.save(C);
		
	}
	
	@GetMapping(path="customer/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable int id)
	{
		Customer C=crepo.findById(id).orElseThrow(() -> new ResourecNotFoundException
				("Product not exist with id:"+id));
		return ResponseEntity.ok(C);
	}
	
	@PutMapping(path="customer/{id}")
	public ResponseEntity<Customer> updatecustomer(@PathVariable int id,@RequestBody Customer customer){
	
	     Customer C=crepo.findById(id).orElseThrow(() -> new ResourceNotFoundException
				("product not exist with id"+id));
	     C.setName(customer.getName());
	     C.setProductname(customer.getProductname());
	     C.setAddress(customer.getAddress());
	     C.setEmail(customer.getEmail());
	     C.setContact(customer.getContact());
	     C.setShopname(customer.getShopname());
	     C.setDate(customer.getDate());
		Customer updatecustomer=crepo.save(C);
		return ResponseEntity.ok(updatecustomer);
	}
	
	@DeleteMapping("customer/{id}")
	public ResponseEntity<Map<String,Boolean>> deletecustomer(@PathVariable int id)
	{
		Customer C=crepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not exist with id"+id));
		crepo.delete(C);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
