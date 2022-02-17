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
public class SupplierController 
{
	@Autowired
	private SupplierRepository srepo;
	
	@GetMapping(path="supplier")
	public List<Supplier> getAllSuppliers(){
		return srepo.findAll();
	}		
	
	
	@PostMapping("/supplier")
	public Supplier createSupplier(@RequestBody Supplier S) {
		
		return srepo.save(S);
		
	}
	
	@GetMapping(path="supplier/{id}")
	public ResponseEntity<Supplier> getSupplierById(@PathVariable int id)
	{
		Supplier S=srepo.findById(id).orElseThrow(() -> new ResourecNotFoundException
				("Product not exist with id:"+id));
		return ResponseEntity.ok(S);
	}

	@PutMapping(path="supplier/{id}")
	public ResponseEntity<Supplier> updatesupplier(@PathVariable int id,@RequestBody Supplier supplier){
	
		Supplier S=srepo.findById(id).orElseThrow(() -> new ResourceNotFoundException
				("product not exist with id"+id));
		S.setName(supplier.getName());
		S.setPhone(supplier.getPhone());
		S.setEmail(supplier.getEmail());
		S.setShopname(supplier.getShopname());
		S.setAccholder(supplier.getAccholder());
		S.setAccnumber(supplier.getAccnumber());
		S.setBankname(supplier.getBankname());
		Supplier updatesupplier=srepo.save(S);
		return ResponseEntity.ok(updatesupplier);
	}
	
	@DeleteMapping("supplier/{id}")
	public ResponseEntity<Map<String,Boolean>> deletesupplier(@PathVariable int id)
	{
		Supplier S=srepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not exist with id"+id));
		srepo.delete(S);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
