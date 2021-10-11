package com.lithan.KYN.Store.Project;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Entity
@EnableAutoConfiguration
public class Store {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeId;
	private String storeName;
	private String storeNumber;
	private String storeLocation;
	
	public int getstoreId() {
		return storeId;
	}
	public void setstoreId(int storeId) {
		this.storeId = storeId;
	}
	public String getstoreName() {
		return storeName;
	}
	public void setstoreName(String storeName) {
		this.storeName = storeName;
	}
	public String getstoreNumber() {
		return storeNumber;
	}
	public void setstoreNumber(String storeNumber) {
		this.storeNumber = storeNumber;
	}
	public String getstoreLocation() {
		return storeLocation;
	}
	public void setstoreLocation(String storeLocation) {
		this.storeLocation = storeLocation;
	}
	public Store(int storeId, String storeName, String storeNumber, String storeLocation) {
		super();
		this.storeId = storeId;
		this.storeName = storeName;
		this.storeNumber = storeNumber;
		this.storeLocation = storeLocation;
	}
	public Store() {
		super();
	}
	
	

	
}
