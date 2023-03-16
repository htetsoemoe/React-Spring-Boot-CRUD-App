package com.ninja.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ninja.fullstack.exception.UserNotFoundException;
import com.ninja.fullstack.model.User;
import com.ninja.fullstack.repository.UserRepository;

@RestController
@CrossOrigin("http://127.0.0.1:5173")
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
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Integer id) {
		return repository.findById(id)
				.orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser, @PathVariable Integer id) {
		return repository.findById(id)
				.map(user -> {
					user.setUserName(newUser.getUserName());
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					return repository.save(user);
				}).orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Integer id) {
		if (!repository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		repository.deleteById(id);
		
		return "User with ID %d has been deleted successfully.".formatted(id);
	}
}
