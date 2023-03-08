package com.demo.beans;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;


import javax.persistence.ManyToOne;

import javax.validation.constraints.NotEmpty;

@Entity
public class Books {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int book_id;
	@NotEmpty
	private String title;
	@NotEmpty
	private String description;
	@NotEmpty
	private String author;
	@NotEmpty
	private String edition;
	@NotEmpty
	private String publication;
	
	private String image;
	@ManyToOne                      //One user's many books
	@JoinColumn(name = "user_id")
	private User user_id;
//	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="borrowerBookId")  
//	private List<Offer> borrower =  new ArrayList<>();
//
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="lenderBookId") 
//	private List<Offer> lender =  new ArrayList<>();

	private int isActive=1;

	public Books() {
		super();
	}

	public Books(int book_id, @NotEmpty String title, @NotEmpty String description, @NotEmpty String author,
			@NotEmpty String edition, @NotEmpty String publication, String image, User user_id, int isActive) {
		super();
		this.book_id = book_id;
		this.title = title;
		this.description = description;
		this.author = author;
		this.edition = edition;
		this.publication = publication;
		this.image = image;
		this.user_id = user_id;
		this.isActive = isActive;
	}

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	public String getPublication() {
		return publication;
	}

	public void setPublication(String publication) {
		this.publication = publication;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

	@Override
	public String toString() {
		return "Books [book_id=" + book_id + ", title=" + title + ", description=" + description + ", author=" + author
				+ ", edition=" + edition + ", publication=" + publication + ", image=" + image + ", user_id=" + user_id
				+ ", isActive=" + isActive + "]";
	}

	public void setDeActive() {
		this.isActive=0;
		
	}

	

	

}
