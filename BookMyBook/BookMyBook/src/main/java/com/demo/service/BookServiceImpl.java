package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.demo.beans.Books;
import com.demo.dao.BookDao;




@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao bookdao;

	@Override
	public List<Books> getallbooks() {

		return bookdao.findAll();

	}

	@Override
	public Books addBooks(Books book) {

		try {
			return bookdao.save(book);
		} catch (IllegalArgumentException e) {

			return null;
		}

	}

	@Override
	public void deleteById(int book_id) throws IllegalArgumentException {

		try {

			bookdao.deleteById(book_id);

		} catch (IllegalArgumentException e) {

			new ResponseEntity(HttpStatus.NO_CONTENT);
		}

	}

	@Override
	public Optional<Books> getById(int book_id) throws EmptyResultDataAccessException {
		Optional<Books> op = bookdao.findById(book_id);
		if (op.isPresent()) {
			System.out.println(op);

			return op;

		} else {
			System.out.println("Not Found");
			return Optional.empty();

		}
	}



	@Override
	public List<Books> getByUserId(int user_id) {
		
		return bookdao.findByUserId(user_id);
		
	
		
	}

	@Override
	public List<Books> getActivebooks() {
		
		return bookdao.findActiveBooks();
	}

	@Override
	public Books getById1(int book_id) {
		
		return bookdao.getById(book_id);
	}

	@Override
	public Books getBooktoUpload(int book_id) {
		return bookdao.getById(book_id);
	}

	



	

}
