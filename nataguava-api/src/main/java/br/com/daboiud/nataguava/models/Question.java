package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String textQuestion;

    @OneToMany(
            mappedBy = "question",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<ItemQuestion> itens;

    @ManyToMany(mappedBy = "questions")
    private Set<Questionary> questionaries;

    @Enumerated(EnumType.STRING)
    private Content content;

}
