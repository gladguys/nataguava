package br.com.daboiud.nataguava.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Vacancy {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String title;
    private String description;
    private int totalChosen;

    @ElementCollection(targetClass = Content.class)
    @CollectionTable(name = "VACANCY_CONTENT",
            joinColumns = @JoinColumn(name = "VACANCY_ID"))
    @Column(name = "CONTENT_ID")
    private Set<Content> contents;

    private VacancyStatus status;
    private String location;


}
