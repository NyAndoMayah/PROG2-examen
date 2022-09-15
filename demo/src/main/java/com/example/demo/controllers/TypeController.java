package com.example.demo.controllers;

import com.example.demo.models.Type;
import com.example.demo.services.TypeService;
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
import java.util.Optional;

@RestController
@Getter
@AllArgsConstructor
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class TypeController {
    private TypeService service;
    @GetMapping("/type")
    List<Type> getAll(){
        return service.getTypes();
    }
    @GetMapping("/type/{id}")
    Type getById(@PathVariable int id){
        return service.getTypeById(id);
    }
    @PostMapping("/type")
    Type addType(@RequestBody Type type ,
                 @RequestParam String unit){
        return service.addType(type,unit);
    }
    @PutMapping("/type")
    Type modifyType(@RequestBody Type type){

        return service.modifyType(type);
    }
    @DeleteMapping("/type")
    String deleteType(@RequestParam int id){

        return service.deleteType(id);
    }
    @PutMapping("/type/{id}/{piecesConsumed}")
    Type consume(@PathVariable int id,
                 @PathVariable int piecesConsumed){
        return service.consumeType(id,piecesConsumed);
    }
    @PutMapping("/type/{id}")
    Type addPieces(@PathVariable int id,
                 @RequestParam int piecesToAdd){
        return service.addPiecesType(id,piecesToAdd);
    }
}
