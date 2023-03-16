package com.ninja.fullstack.exception;

public class UserNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public UserNotFoundException(Integer id) {
		super("Could not found the user with id %d".formatted(id));
	}

}
