package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class ItemQuestion {

    private String text;
    private Question question;
    private boolean correct;
}
