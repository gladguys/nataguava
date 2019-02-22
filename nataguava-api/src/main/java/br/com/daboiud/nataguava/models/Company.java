package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Company extends User {

    private String name;
    private String phone;
    private String description;
}
