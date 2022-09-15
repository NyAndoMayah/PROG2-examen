package com.example.demo.controllers;

import com.example.demo.models.Product;
import com.example.demo.services.ProductService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Getter
@AllArgsConstructor
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class ProductController {
    private ProductService service;

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable int id){
        return service.getProductById(id);
    }
    @GetMapping("/products/search/{name}")
    public List<Product> search(@PathVariable String name){
        return service.getProductByName(name);
    }

    @GetMapping("/products")
    public List<Product> getProducts(){
        return service.getProducts();
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        return service.addProduct(product);
    }

    @PutMapping("/products")
    public Product modifyProduct(@RequestParam Product product){

        return service.putProduct(product);
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable int id){
        return service.delete(id);
    }
}
