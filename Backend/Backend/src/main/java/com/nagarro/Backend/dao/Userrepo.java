 package com.nagarro.Backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.Backend.Entities.User;
@Repository
public interface Userrepo extends JpaRepository<User,String>{
       
	User findByEmail(String email);
}
