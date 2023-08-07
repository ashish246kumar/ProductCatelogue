package com.nagarro.Backend.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Serviceavability {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String pincodes;
	private String estimatedays;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="productCode")
	private Product product;
	public int getId() {
		return id;
	}
	
	
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPincodes() {
		return pincodes;
	}
	public void setPincodes(String pincodes) {
		this.pincodes = pincodes;
	}
	public String getEstimatedays() {
		return estimatedays;
	}
	public void setEstimatedays(String estimatedays) {
		this.estimatedays = estimatedays;
	}
}
