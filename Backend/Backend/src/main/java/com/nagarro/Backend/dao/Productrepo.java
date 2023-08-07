package com.nagarro.Backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nagarro.Backend.Entities.Product;
import com.nagarro.Backend.Entities.Serviceavability;

@Repository
public interface Productrepo extends JpaRepository<Product,String>{

    List<Product> findByPriceBetween(Double minPrice, Double maxPrice);

    List<Product> findByPriceGreaterThanEqual(Double minPrice);

    List<Product> findByPriceLessThanEqual(Double maxPrice);
    Product findByProductCode(String productCode);
    @Query("SELECT sa FROM Serviceavability sa WHERE sa.product.productCode = ?1 AND sa.pincodes = ?2")
    Serviceavability findByProductCodeAndServiceavabilityPincodes(String productCode, String pincode);
    
    @Query("SELECT p FROM Product p WHERE p.productCode LIKE %?1%"
            + " OR p.name LIKE %?1%"
            + " OR p.brand LIKE %?1%")
    public List<Product> search(String keyword);
}
