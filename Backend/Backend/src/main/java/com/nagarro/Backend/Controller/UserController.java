package com.nagarro.Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.nagarro.Backend.Entities.User;
import com.nagarro.Backend.service.UserService;

@CrossOrigin(origins="*")
@RestController
public class UserController {
    
	private UserService userservice;
	@Autowired
	public UserController(UserService userservice) {
		this.userservice=userservice;
	}
	@PostMapping("/user")
	public ResponseEntity<User> createProduct(@RequestBody User user) {
		 
		try {
			User createdUser = userservice.createUser(user);
	        
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
	       }
	       catch(Exception e) {
	    	   e.printStackTrace();
	    	   return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	       }
		
	}
	
	
	
	@GetMapping("/user/{email}")
	public ResponseEntity<User>getUser(@PathVariable("email")String email){
		   User user= userservice.getuser(email);
		   if(user==null) {
			   return ResponseEntity.ok(null);
		   }
		   
		   return ResponseEntity.ok(user);
	}
	
	
}
