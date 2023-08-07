package com.nagarro.Backend.service;

import java.util.Collections;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.Backend.Entities.Product;
import com.nagarro.Backend.Entities.Serviceavability;
import com.nagarro.Backend.dao.Productrepo;

@Service
public class Productservice {
   
	
	private Productrepo productrepo;
	 
	@Autowired
	public Productservice(Productrepo productrepo) {
		this.productrepo=productrepo;
	}
	
	
	public Product createProduct(Product product) {
		List<Serviceavability> serviceAvailabilities = product.getServiceavability();
        if (serviceAvailabilities != null) {
            for (Serviceavability serviceAvailability : serviceAvailabilities) {
                serviceAvailability.setProduct(product);
            }
        }
        return productrepo.save(product);
	}
	public Product getProductByProductCode(String productCode) {
        return productrepo.findById(productCode).orElse(null);
    }
	public List<Product>getProduct(){
		return this.productrepo.findAll();
	}
	public Serviceavability getProductByPincode(String code,String pincode) {
		return productrepo.findByProductCodeAndServiceavabilityPincodes(code, pincode);
	}
	
	
   
	
	public List<Product>searchproductByPrice(Double minPrice,Double maxPrice){
	        
		 if (minPrice != null && maxPrice != null) {
		        return productrepo.findByPriceBetween(minPrice, maxPrice);
		    } else if (minPrice != null) {
		        return productrepo.findByPriceGreaterThanEqual(minPrice);
		    } else if (maxPrice != null) {
		        return productrepo.findByPriceLessThanEqual(maxPrice);
		    } else {
		        return Collections.emptyList();
		    }
		  
		   
	   }
	 public List<Product> listAll(String keyword) {
	        if (keyword != null) {
	            return productrepo.search(keyword);
	        }
	        return productrepo.findAll();
	    }
	 
}
