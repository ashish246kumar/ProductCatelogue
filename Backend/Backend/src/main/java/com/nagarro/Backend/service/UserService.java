package com.nagarro.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.nagarro.Backend.Entities.User;

import com.nagarro.Backend.dao.Userrepo;

@Service
public class UserService {
     

	private Userrepo userrepo;
	 
	@Autowired
	public UserService(Userrepo userrepo) {
		
		this.userrepo=userrepo;
	}
	
	
	public User createUser(User user) {

		   return userrepo.save(user);
	}
	public User getuser(String email) {
		User user = userrepo.findByEmail(email);
		if(user==null) {
			return null;
		}
		return user;
	}
	
}
