package com.demo.beans;

import javax.persistence.Embeddable;


@Embeddable
public class Address {
	
	private String area;
	private String building;
	private String city;
	private String state;
	private int pincode;
	
	
	
	public Address() {
		super();

	}
	public Address(String area, String building, String city, String state, int pincode) {
		super();
		this.area = area;
		this.building = building;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getBuilding() {
		return building;
	}
	public void setBuilding(String building) {
		this.building = building;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "Address [area=" + area + ", building=" + building + ", city=" + city + ", state=" + state + ", pincode="
				+ pincode + "]";
	}
	
}
