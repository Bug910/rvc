package com.maltsev.edu.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class ManagerNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(ManagerNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String managerNotFoundHandler(ManagerNotFoundException ex){
        return ex.getMessage();
    }
}
