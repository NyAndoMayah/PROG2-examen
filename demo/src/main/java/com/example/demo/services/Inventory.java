package com.example.demo.services;

import com.example.demo.models.Type;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@AllArgsConstructor
public class Inventory {
  private GroupService groupService;
  private ProductService productService;
  private TypeService typeService;

  public List<Integer> typesInventory(List<Type> expected, List<Type> actuals) {
    List<Integer> ids = new ArrayList<>();
    for (int i = 0; i < expected.size(); i++) {
      if(actuals.get(i).getId() == expected.get(i).getId()){
        if(!(actuals.get(i).getTotalQuantity() == expected.get(i).getTotalQuantity())
            || !(actuals.get(i).getPiecesNumber() == expected.get(i).getPiecesNumber())){
          ids.add(expected.get(i).getId());
        }
      }
    }return ids;
  }

}
