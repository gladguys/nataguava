package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.Entity;
import java.util.Date;

@Entity
@Data
public class Candidate {

    private String name;
    private String lastname;
    private Date birthday;
    private String password;
    private String email;

}
