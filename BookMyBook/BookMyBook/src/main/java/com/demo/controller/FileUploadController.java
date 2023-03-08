package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.demo.beans.Books;
import com.demo.filehelper.FileUploadHelper;
import com.demo.service.BookService;


@CrossOrigin
@RestController
public class FileUploadController {
	
	@Autowired
	private FileUploadHelper fileUploadHelper;
	@Autowired
	BookService bookService;

	@PostMapping("/upload/{book_id}")
	public ResponseEntity<String> uploadFile(@PathVariable int book_id,@RequestParam("file") MultipartFile imgfile){
		System.out.println(imgfile.getOriginalFilename());
		//validation
		try {
			if(imgfile.isEmpty()) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("request must contain file");
			}
			
			if(!imgfile.getContentType().equals("image/jpeg")){
					return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only Jpeg file allowed");
			}
			
			boolean status=fileUploadHelper.uploadFile(imgfile);
			if(status) {
				Books b= bookService.getBooktoUpload(book_id);
				String ImgUrl=("/images/"+imgfile.getOriginalFilename());
				System.out.println(imgfile.getOriginalFilename());
				b.setImage(ImgUrl);
				bookService.addBooks(b);
				return ResponseEntity.ok("File is successfully uploaded");
				//ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(imgfile.getOriginalFilename()).toUriString());
			}

		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong! try again");
	}
	
}
