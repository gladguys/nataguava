package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Questionary {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Candidate candidate;

    @ManyToOne(fetch = FetchType.EAGER)
    private Job job;

    @ManyToMany
    @JoinTable(name="questionary_question", joinColumns=
            {@JoinColumn(name="questionary_id")}, inverseJoinColumns=
            {@JoinColumn(name="question_id")})
    private Set<Question> questions;

    private int scores;
}
