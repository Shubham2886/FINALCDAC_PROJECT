/*package com.demo.beans;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
	
    @ManyToOne
	@JoinColumn(name = "borrower_id")
	private User borrowerId;    //one user can have many order
	
	@ManyToOne
	@JoinColumn(name = "lender_id")
	private User lenderId;
	
	@ManyToOne
	@JoinColumn(name = "book_id")
	private Books bookId;
	
	private Date issuedDate;
	private Date returnDate;
	private String transactionType;   //exchange/rent
	
	
	public Order() {
		super();
	}


	public Order(int orderId, Date issuedDate, Date returnDate, String transactionType) {
		super();
		this.orderId = orderId;
		this.issuedDate = issuedDate;
		this.returnDate = returnDate;
		this.transactionType = transactionType;
	}


	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}


	public User getBorrowerId() {
		return borrowerId;
	}


	public void setBorrowerId(User borrowerId) {
		this.borrowerId = borrowerId;
	}


	public User getLenderId() {
		return lenderId;
	}


	public void setLenderId(User lenderId) {
		this.lenderId = lenderId;
	}


	public Books getBookId() {
		return bookId;
	}


	public void setBookId(Books bookId) {
		this.bookId = bookId;
	}


	public Date getIssuedDate() {
		return issuedDate;
	}


	public void setIssuedDate(Date issuedDate) {
		this.issuedDate = issuedDate;
	}


	public Date getReturnDate() {
		return returnDate;
	}


	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}


	public String getTransactionType() {
		return transactionType;
	}


	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}
	
	
	
}*/