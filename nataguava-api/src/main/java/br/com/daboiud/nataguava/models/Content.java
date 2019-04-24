package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Content {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ContentTag ContentTag;

    private int qtQuestions;

}