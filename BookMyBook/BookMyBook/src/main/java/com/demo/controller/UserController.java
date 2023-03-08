package com.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.User;
import com.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> ulist = userService.getAllUsers();
		if (ulist.size() <= 0) {
			return ResponseEntity.notFound().build();
		}
		return new ResponseEntity<>(ulist, HttpStatus.OK);

	}

	@PostMapping("/user")
	public ResponseEntity<User> addUser(@Valid @RequestBody User u) {

		User u1 = userService.addUser(u);

		userService.getById(u.getUserId());
		if (u1 != null) {

			return new ResponseEntity<>(u1, HttpStatus.CREATED);
		} else {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@PostMapping("/login")
	public ResponseEntity<User> validateUser( @RequestBody User u) {

		User u1 = userService.validateUser(u.getEmail(), u.getPassword());
		System.out.println(u1);

		if (u1 != null) {

			return new ResponseEntity<>(u1, HttpStatus.OK);
		} else {
			
			System.out.println("Wrong credentials");

			return new ResponseEntity<>(u1, HttpStatus.OK);
		}
	}
}
