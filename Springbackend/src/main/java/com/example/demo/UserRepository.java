package com.example.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer>
{

	User findByUsernameAndPassword(String tempusername, String temppass);

	
	
	

}
