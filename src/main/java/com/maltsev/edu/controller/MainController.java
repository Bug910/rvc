package com.maltsev.edu.controller;

import com.maltsev.edu.domain.Manager;
import com.maltsev.edu.exception.ManagerNotFoundException;
import com.maltsev.edu.repository.ManagerRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MainController {

    private ManagerRepo managerRepo;

    MainController(ManagerRepo managerRepo){
        this.managerRepo = managerRepo;
    }

    @GetMapping("/managers")
    List<Manager> all(){
        return managerRepo.findAll();
    }
    @PostMapping("/managers")
    Manager newManager(@RequestBody Manager newManger){
        return managerRepo.save(newManger);
    }
    @GetMapping("/managers/{id}")
    Manager one(@PathVariable Integer id){
        return managerRepo.findById(id)
                .orElseThrow(()-> new ManagerNotFoundException(id));
    }

    @PutMapping("/managers/{id}")
    Manager replaceManager(@RequestBody Manager newManager, @PathVariable Integer id){
        return managerRepo.findById(id)
                .map(manager -> {
                    manager.setEmployee(newManager.getEmployee());
                    manager.setEmployeeAccensus(newManager.getEmployeeAccensus());
                    return managerRepo.save(manager);
                })
                .orElseGet(()->{
                    newManager.setId(id);
                    return managerRepo.save(newManager);
                });
    }

    @DeleteMapping("/managers/{id}")
    void deleteManager(@PathVariable Integer id){
        managerRepo.deleteById(id);
    }


}

