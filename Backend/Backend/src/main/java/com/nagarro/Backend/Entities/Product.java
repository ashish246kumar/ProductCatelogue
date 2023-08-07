package com.nagarro.Backend.Entities;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;


import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Product {
  

	@Id
	private String productCode;
    private String name;
    
    private String brand;
    private String description;
    private double price;
      
    private String image;
    
   
          
    
    
    
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Serviceavability>serviceavability;
	

    
	public List<Serviceavability> getServiceavability() {
		return serviceavability;
	}
	public void setServiceavability(List<Serviceavability> serviceavability) {
		this.serviceavability = serviceavability;
	}

	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
    
}
