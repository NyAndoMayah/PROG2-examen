package com.example.demo.repositories;

import com.example.demo.models.Group;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group,Integer> {
    Page<Group> findAll(Pageable pageable);
    @Query("SELECT g from groups g where g.groupName LIKE %?1%")
    List<Group> getByCriteria(String name);
}
