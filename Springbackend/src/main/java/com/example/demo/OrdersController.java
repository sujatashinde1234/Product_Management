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
public class OrdersController 
{
	@Autowired
	private OrdersRepository orepo; 
	
	@GetMapping("/order")
	public List<Orders> getAllCustomer(){
		return orepo.findAll();
	}		
	
	
	@PostMapping("/order")
	public Orders createOrders(@RequestBody Orders O) {
		
		return orepo.save(O);
		
	}
	
	@GetMapping(path="order/{id}")
	public ResponseEntity<Orders> getOrderById(@PathVariable int id)
	{
		Orders O=orepo.findById(id).orElseThrow(() -> new ResourecNotFoundException
				("Product not exist with id:"+id));
		return ResponseEntity.ok(O);
	}
	
	@PutMapping(path="order/{id}")
	public ResponseEntity<Orders> updateOrder(@PathVariable int id,@RequestBody Orders orders){
	
	     Orders O=orepo.findById(id).orElseThrow(() -> new ResourceNotFoundException
				("product not exist with id"+id));
	     O.setCustomername(orders.getCustomername());
	     O.setProductname(orders.getProductname());
	     O.setSuppliername(orders.getSuppliername());
	     O.setAddress(orders.getAddress());
	     O.setQuantity(orders.getQuantity());
	     O.setPrice(orders.getPrice());
	     O.setTotol(orders.getTotol());
	     Orders updateorder=orepo.save(O);
		return ResponseEntity.ok(updateorder);
	}
	
	@DeleteMapping("order/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteorder(@PathVariable int id)
	{
		Orders O=orepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not exist with id"+id));
		orepo.delete(O);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
