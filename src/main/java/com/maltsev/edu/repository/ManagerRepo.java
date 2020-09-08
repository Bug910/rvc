package com.maltsev.edu.repository;

import com.maltsev.edu.domain.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepo extends JpaRepository<Manager, Integer> {

}
