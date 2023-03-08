package com.demo.dao;




import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.Books;


@Repository
public interface BookDao extends JpaRepository<Books ,Integer>{


	@Query(value="select * from books where user_id=?", nativeQuery=true)
	List<Books> findByUserId(int user_id);

	@Query(value="select * from books where is_active=1", nativeQuery=true) //is_active=0 means book is listed in the list 
	                                                                        //is_active=1 means book is deactivated
	List<Books> findActiveBooks();
    
	

}
