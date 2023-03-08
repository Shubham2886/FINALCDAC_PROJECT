package com.demo.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	@Query(value = "select * from user where email=? and password=?", nativeQuery = true)
	User validateUser(String email, String password);

}
