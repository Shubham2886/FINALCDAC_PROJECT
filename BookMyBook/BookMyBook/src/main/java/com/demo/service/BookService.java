package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.demo.beans.Books;




public interface BookService {

	List<Books> getallbooks();

	Books addBooks(Books book);

	void deleteById(int book_id);

	Optional<Books> getById(int book_id);

	List<Books> getByUserId(int user_id);

	List<Books> getActivebooks();

	Books getById1(int book_id);

	Books getBooktoUpload(int book_id);

	

	

	

}
