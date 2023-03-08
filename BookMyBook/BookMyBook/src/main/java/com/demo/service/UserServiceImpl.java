package com.demo.service;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.demo.beans.User;
import com.demo.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	
	@Override
	public List<User> getAllUsers() {
		
		return userDao.findAll();
	}
	
	@Override
	public User addUser(User u) {

		return userDao.save(u);
	}

	@Override
	public Optional<User> getById(int userId) throws EmptyResultDataAccessException {
		Optional<User> op = userDao.findById(userId);
		if (op.isPresent()) {
			System.out.println(op);

			return op;

		} else {
			System.out.println("return null");
			return Optional.empty();

		}
	}


	@Override
	public User validateUser(String email, String password) {

		return userDao.validateUser(email, password);
	}

	
}
