package com.example.demo.controllers;

import com.example.demo.models.Group;
import com.example.demo.services.GroupService;
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
public class GroupController {
    private GroupService service;
    @GetMapping("/groups")
    public List<Group> getGroups(){
        return service.getGroups();
    }

    @GetMapping("/groups/{id}")
    public Group getGroupById(@PathVariable int id){
        return service.getGroupById(id);
    }

    @PostMapping("/groups")
    public Group addGroup(@RequestBody Group group){

        return service.addGroup(group);
    }
    @PutMapping("/groups")
    public Group modifyGroup(@RequestBody Group group){

        return  service.modifyGroup(group);
    }

    @GetMapping("/groups/search/{name}")
    public List<Group> search(@PathVariable String name){
        return service.getGroupByName(name);
    }

    @DeleteMapping("/groups/{id}")
    public String deleteGroup(@PathVariable int id){

        return service.deleteGroup(id);
    }
}
