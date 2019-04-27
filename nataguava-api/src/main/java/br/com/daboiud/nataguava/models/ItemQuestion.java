package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "item_question")
public class ItemQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String text;

    private boolean correct;
}
