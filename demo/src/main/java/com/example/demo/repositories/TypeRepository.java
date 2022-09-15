package com.example.demo.repositories;

import com.example.demo.models.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeRepository extends JpaRepository<Type,Integer> {
@Query("SELECT t FROM Type t WHERE lower(t.name) like %?1%")
  List<Type> searchByName(String word);
}
