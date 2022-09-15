package com.example.demo.services;

import com.example.demo.models.Group;
import com.example.demo.repositories.GroupRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GroupService {
    private GroupRepository repository;
    public Group getGroupById(int id){
        return repository.findById(id).get();
    }

    public List<Group> getGroupByName(String name){
        return  repository.getByCriteria(name);
    }

    public List<Group> getGroups(){
       return repository.findAll().stream().toList();
    }
    public Group addGroup(Group group){
        return repository.save(group);
    }
    public Group modifyGroup(Group group){
        Group modifiedGroup = repository.findById(group.getId()).get();
        modifiedGroup.setGroupName(group.getGroupName());
        return modifiedGroup;
    }
    public String deleteGroup(int id){
        repository.deleteById(id);
        return "Group deleted successfully";
    }
}
