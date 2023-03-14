package com.ninja.fullstack.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ninja.fullstack.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{

}
