package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Books;

import com.demo.service.BookService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class BooksController {
	@Autowired
	BookService bookService;

	@GetMapping("/books")
	public ResponseEntity<List<Books>> getAllBoooks() {
		List<Books> blist = bookService.getallbooks();
		if (blist.size() <= 0) {
			return ResponseEntity.notFound().build();
		} else {
			return new ResponseEntity<>(blist, HttpStatus.OK);
		}

	}
	

	@GetMapping("/activebook")
	public ResponseEntity<List<Books>> getAllBooks() {
		List<Books> blist = bookService.getActivebooks();
		if (blist.size() <= 0) {
			return ResponseEntity.notFound().build();
		} else {
			return new ResponseEntity<>(blist, HttpStatus.OK);
		}

	}

	@PostMapping("/book")
	public ResponseEntity<Books> addBooks(@RequestBody Books book) {
		Books b1 = bookService.addBooks(book);

		HttpHeaders httpHeaders = new HttpHeaders();

		httpHeaders.add("Books", "p1 added" + b1.getBook_id());

		if (b1 != null) {
			return new ResponseEntity<>(b1, httpHeaders, HttpStatus.CREATED);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@DeleteMapping("/books/{book_id}")
	public ResponseEntity<String> DeleteProduct(@PathVariable int book_id) {

		bookService.deleteById(book_id);

		return new ResponseEntity("Data Not Found: " + book_id, HttpStatus.NO_CONTENT);

	}

	@GetMapping("/books/{book_id}")
	public ResponseEntity<Books> getById(@PathVariable int book_id) {
		Optional<Books> b = bookService.getById(book_id);

		if (b.isPresent()) {
			return new ResponseEntity<>(b.get(), HttpStatus.OK);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}


	@GetMapping("/userbooks/{user_id}")
	public ResponseEntity<List<Books>> getByUserId(@PathVariable int user_id) {
		List<Books> b = bookService.getByUserId(user_id);

		System.out.println(b);
		if (b != null) {
			return new ResponseEntity<>(b , HttpStatus.OK);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

	@PutMapping("/books/{book_id}")
	public ResponseEntity<Books> deactiveById(@PathVariable int book_id) {
		Books book = bookService.getById1(book_id);
		System.out.println(book);
		if (book!=null) {
			book.setDeActive();
			bookService.addBooks(book);
			
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return null;
	}	
}
