package com.example.demo.services;

import com.example.demo.models.Type;
import com.example.demo.repositories.TypeRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TypeService {
    private TypeRepository repository;
    public List<Type> getTypes(){
        return repository.findAll().stream().toList();
    }
    public Type getTypeById(int id){
        if(repository.findById(id).isPresent()){
            return repository.findById(id).get();
        }
        throw new RuntimeException();
    }
    public List<Type> searchByName(String name){
        return repository.searchByName(name);
    }
    public Type addType(Type type,String unit){
        type.setUnit(Type.Unit.valueOf(unit));
        type.setAddedDate(LocalDate.now());
        type.setTotalPrice(type.getUnitPrice()*type.getPiecesNumber());
        type.setTotalQuantity(type.getUnitQuantity()*type.getPiecesNumber());
        return repository.save(type);
    }
    public Type modifyType(Type type){
        Type modifiedType = repository.findById(type.getId()).get();
        modifiedType.setName(type.getName());
        modifiedType.setUnit(type.getUnit());
        modifiedType.setPeremptionDate(type.getPeremptionDate());
        modifiedType.setUnitPrice(type.getUnitPrice());
        modifiedType.setPiecesNumber(type.getPiecesNumber());
        modifiedType.setProduct(type.getProduct());
        modifiedType.setUnitQuantity(type.getUnitQuantity());
        modifiedType.setTotalPrice(type.getUnitPrice()*type.getPiecesNumber());
        modifiedType.setTotalQuantity(type.getUnitQuantity()*type.getPiecesNumber());
        return repository.save(modifiedType);
    }
    public String deleteType(int id){
        repository.deleteById(id);
        return "Type deleted successfully";
    }
    public Type consumeType(int id,int piecesConsumed){
        Type type = repository.findById(id).get();
        type.setPiecesNumber(type.getPiecesNumber()-piecesConsumed);
        return modifyType(type);
    }
    public Type addPiecesType(int id,int piecesConsumed){
        Type type = repository.findById(id).get();
        type.setPiecesNumber(type.getPiecesNumber()+piecesConsumed);
        return modifyType(type);
    }

}
