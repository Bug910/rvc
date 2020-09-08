package com.maltsev.edu.exception;


public class ManagerNotFoundException extends RuntimeException{

    public ManagerNotFoundException(Integer id) {
        super("Could not find manager" + id);
    }
}
