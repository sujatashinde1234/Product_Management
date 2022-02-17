package com.example.demo;




import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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
public class ProductController 
{
	@Autowired
	private ProductRepository repo; 
	
	
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return repo.findAll();
	}		
	
	@PostMapping("/products")
	public Product createProduct(@RequestBody Product P) {
		return repo.save(P);
	}
	
	@GetMapping(path="products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id )
	{
		Product P=repo.findById(id).orElseThrow(() -> new ResourecNotFoundException
				("Product not exist with id:"+id));
		return ResponseEntity.ok(P);
	}
	
	@PutMapping(path="products/{id}")
	public ResponseEntity<Product> updateproduct(@PathVariable int id,@RequestBody Product products){
	
		Product P=repo.findById(id).orElseThrow(() -> new ResourceNotFoundException
				("product not exist with id"+id));
		P.setName(products.getName());
		P.setQuantity(products.getQuantity());
		P.setMadein(products.getMadein());
		P.setBrand(products.getBrand());
		P.setPrice(products.getPrice());
		P.setStatus(products.getStatus());
		Product updateproduct=repo.save(P);
		return ResponseEntity.ok(updateproduct);
	}
	
	@DeleteMapping("products/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteproduct(@PathVariable int id)
	{
		Product P=repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not exist with id"+id));
		repo.delete(P);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
}






