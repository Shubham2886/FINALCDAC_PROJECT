package com.demo.beans;



import javax.persistence.Column;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	// name should not be null or empty
	@NotEmpty
	private String full_name;
	
	// password should not be null or empty
	// password should have at least 8 characters
	@NotEmpty
	@Size(min = 8, message = "password should have at least 8 characters")
	private String password;
	@NotEmpty
	private String mobileNumber;

	// email should not be null or empty
	// email should be in proper email format
	@NotEmpty
	@Email
	private String email;
	
	@NotEmpty
	@Column(unique = true)
	private String aadharNumber;
	
	@Embedded
	private Address address;
	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="user_id")  //if user is deleted then book will also get delete--cascade
//	private List<Books> book_id =  new ArrayList<>();
//	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="borrowerId") 
//	private List<Offer> borrower_id=  new ArrayList<>();
//
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="lenderId") 
//	private List<Offer> lender_id =  new ArrayList<>();
//	
//	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="lenderId") 
//	private List<Order> lender =  new ArrayList<>();
//
//	@OneToMany(cascade = CascadeType.ALL, mappedBy="borrowerId") 
//	private List<Order> borrower =  new ArrayList<>();


	public User() {
		super();
	}

	public User(int userId) {
		this.userId = userId;
	}

	public User(int userId, String full_name, String password, String mobileNumber, String email, String aadharNumber,
			Address address) {
		super();
		this.userId = userId;
		this.full_name = full_name;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.aadharNumber = aadharNumber;
		this.address = address;
	}

	public User(String full_name, String password, String mobileNumber, String email, String aadharNumber,
			Address address) {
		super();
				this.full_name = full_name;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.aadharNumber = aadharNumber;
		this.address = address;
	}
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;

	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", full_name=" + full_name + ", password=" + password + ", mobileNumber="
				+ mobileNumber + ", email=" + email + ", aadharNumber=" + aadharNumber + ", address=" + address + "]";
	}

}