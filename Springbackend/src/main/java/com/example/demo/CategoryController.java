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
public class CategoryController 
{
	@Autowired
	CategoryRepository crepo;
	
	@GetMapping("/category")
	public List<Category> getAllCategorys(){
		return crepo.findAll();
	}		
	
	
	@PostMapping("/category")
	public Category createCategory(@RequestBody Category C) {
		
		return crepo.save(C);
		
	}
	
	@GetMapping(path="category/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable int id)
	{
		Category C=crepo.findById(id).orElseThrow(() -> new ResourecNotFoundException
				("Product not exist with id:"+id));
		return ResponseEntity.ok(C);
	}
	
	@PutMapping(path="category/{id}")
	public ResponseEntity<Category> updatecategory(@PathVariable int id,@RequestBody Category category){
	
		Category C=crepo.findById(id).orElseThrow(() -> new ResourceNotFoundException
				("product not exist with id"+id));
		C.setName(category.getName());
		
	     Category updatecategory=crepo.save(C);
		return ResponseEntity.ok(updatecategory);
	}
	
	@DeleteMapping("category/{id}")
	public ResponseEntity<Map<String,Boolean>> deletecategory(@PathVariable int id)
	{
		Category C=crepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not exist with id"+id));
		crepo.delete(C);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
