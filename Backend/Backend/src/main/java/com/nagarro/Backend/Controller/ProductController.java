package com.nagarro.Backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nagarro.Backend.Entities.Product;
import com.nagarro.Backend.Entities.Serviceavability;
import com.nagarro.Backend.service.Productservice;
@CrossOrigin(origins="*")
@RestController
public class ProductController {
      
	private Productservice productservice;
	@Autowired
	public ProductController(Productservice productservice) {
		this.productservice=productservice;
	}
	
	@PostMapping("/product")
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
       try {

		
    	   Product createdProduct = productservice.createProduct(product);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
       }
       catch(Exception e) {
    	 
    	   return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
       }
    }
	
	@GetMapping("/product")
	public ResponseEntity<List<Product>>getProduct(){
		       List<Product>product=this.productservice.getProduct();
		       if(product==null ||product.isEmpty()) {
		    	   return ResponseEntity.ok(null);
		       }
		       return ResponseEntity.ok(product);
	}
	
	
	@GetMapping("/searchproduct")
	public ResponseEntity<Product>searchProduct(
			@RequestParam(required=false)String productCode ){
		       Product product=this.productservice.getProductByProductCode(productCode);;
		       if(product==null ) {
		    	   
		    	   return ResponseEntity.ok(null);
		       }
		       return ResponseEntity.ok(product);
	}
	
	
	@GetMapping("/search-product")
	public ResponseEntity<List<Product>>getProductByPrice(
			@RequestParam(required=false)Double minPrice,@RequestParam(required=false)Double maxPrice ){
		       List<Product>product=this.productservice.searchproductByPrice(minPrice,maxPrice);
		       if(product==null ||product.isEmpty()) {
		    	   
		    	   return ResponseEntity.ok(null);
		       }
		       return ResponseEntity.ok(product);
	}
	
   
	
	
	@GetMapping("/searchproduct/{productCode}/{pincode}")
	public ResponseEntity<Serviceavability>getProductByPincode(@PathVariable("productCode") String code,
			@PathVariable("pincode") String pincode){
		Serviceavability product=this.productservice.getProductByPincode(code,pincode);
		       if(product==null ) {
		    	   return ResponseEntity.ok(null);
		       }
		       return ResponseEntity.ok(product);
	}
	
	
	@GetMapping("/search-products")
	public ResponseEntity<List<Product>>getProducts(@RequestParam(value = "keyword", 
	required = false) String keyword){
		List<Product> listProducts =this.productservice.listAll(keyword);
		 if(listProducts==null ) {
	    	   return ResponseEntity.ok(null);
	       }
		return ResponseEntity.ok(listProducts);
	}

	
}
