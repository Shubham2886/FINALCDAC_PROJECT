package com.demo.service;

import java.util.List;
import java.util.Optional;


import com.demo.beans.User;

public interface UserService {

	User addUser(User u);

	Optional<User> getById(int userId);

	List<User> getAllUsers();

	User validateUser(String email, String password);

}
