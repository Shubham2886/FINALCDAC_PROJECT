package com.demo.beans;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;

@Entity
public class Offer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int offerId;
	
	@ManyToOne
	@JoinColumn(name = "borrower_id")
	private User borrower_id;    //one user can have many offers
	
	@ManyToOne
	@JoinColumn(name = "lender_id")
	private User lender_id;
	
	@ManyToOne
	@JoinColumn(name = "borrower_book_id")
	private Books borrower_book_id;  //one book can have many offers
	
	@ManyToOne
	@JoinColumn(name = "lender_book_id")
	private Books lender_book_id;
	
	
	private String exchange_date;
	
	private int isActive=1;
	
	public Offer() {
		super();
	}

	
	
	
	public Offer(int offerId, User borrower_id, User lender_id, Books borrower_book_id, Books lender_book_id,
			String exchange_date, int isActive) {
		super();
		this.offerId = offerId;
		this.borrower_id = borrower_id;
		this.lender_id = lender_id;
		this.borrower_book_id = borrower_book_id;
		this.lender_book_id = lender_book_id;
		this.exchange_date = exchange_date;
		this.isActive = isActive;
	}




	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}

	public User getBorrower_id() {
		return borrower_id;
	}

	public void setBorrower_id(User borrower_id) {
		this.borrower_id = borrower_id;
	}

	public User getLender_id() {
		return lender_id;
	}

	public void setLender_id(User lender_id) {
		this.lender_id = lender_id;
	}

	public Books getBorrower_book_id() {
		return borrower_book_id;
	}

	public void setBorrower_book_id(Books borrower_book_id) {
		this.borrower_book_id = borrower_book_id;
	}

	public Books getLender_book_id() {
		return lender_book_id;
	}

	public void setLender_book_id(Books lender_book_id) {
		this.lender_book_id = lender_book_id;
	}

	public String getExchange_date() {
		return exchange_date;
	}

	public void setExchange_date(String exchange_date) {
		this.exchange_date = exchange_date;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

	public void setDeActive() {
		this.isActive = 0;
	}


	@Override
	public String toString() {
		return "Offer [offerId=" + offerId + ", borrower_id=" + borrower_id + ", lender_id=" + lender_id
				+ ", borrower_book_id=" + borrower_book_id + ", lender_book_id=" + lender_book_id + ", exchange_date="
				+ exchange_date + ", isActive=" + isActive + "]";
	}

	
	
	
	
	
}
