package com.ninja.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ninja.fullstack.model.User;
import com.ninja.fullstack.repository.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@GetMapping("/users")
	public Iterable<User> getAllUsers() {
		return repository.findAll();
	}

	@PostMapping("/user")
	public User newUser(@RequestBody User user) {
		User newUser = repository.save(user);
		return newUser;		
	}
}
