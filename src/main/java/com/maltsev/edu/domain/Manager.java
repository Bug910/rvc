package com.maltsev.edu.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "T_MANAGERS")
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column (name = "ID")
    private Integer id;

    @Column (name = "NAME_MAN")
    private String employee;

    @Column (name = "PRM_UVOLEN")
    private char employeeAccensus;

    public Manager() {

    }
    public Manager(Integer id, String employee, char employeeAccensus) {
        this.id = id;
        this.employee = employee;
        this.employeeAccensus = employeeAccensus;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmployee() {
        return employee;
    }

    public void setEmployee(String employee) {
        this.employee = employee;
    }

    public char getEmployeeAccensus() {
        return employeeAccensus;
    }

    public void setEmployeeAccensus(char employeeAccensus) {
        this.employeeAccensus = employeeAccensus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Manager manager = (Manager) o;
        return employeeAccensus == manager.employeeAccensus &&
                Objects.equals(id, manager.id) &&
                Objects.equals(employee, manager.employee);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, employee, employeeAccensus);
    }

    @Override
    public String toString() {
        return "Manager{" +
                "id=" + id +
                ", employee='" + employee + '\'' +
                ", employeeAccensus=" + employeeAccensus +
                '}';
    }
}
