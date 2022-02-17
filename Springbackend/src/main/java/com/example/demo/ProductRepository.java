package com.example.demo;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


public interface ProductRepository extends JpaRepository<Product,Integer>
{

	
	public List<Product> findByNameContaining(String name);

}
