package com.example.demo.services;

import com.example.demo.models.Product;
import com.example.demo.repositories.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository repository;
    public  Product getProductById(int id){
        return repository.findById(id).get();
    }
    public List<Product> getProductByName(String name){
        return repository.getByCriteria(name);
    }
    public List<Product> getProducts(){
        return repository.findAll().stream().toList();
    }
    public Product addProduct(Product product){
        return repository.save(product);
    }
    public Product putProduct(Product product){
        Product productToModify = repository.findById(product.getId()).get();
        productToModify.setProductName(product.getProductName());
        return repository.save(productToModify);
    }
    public String delete(int id){
        repository.deleteById(id);
        return "Product deleted successfully";
    }
}
