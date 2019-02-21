package br.com.daboiud.nataguava.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String title;
    private String description;
    private int totalChosen;

    @ElementCollection(targetClass = Content.class)
    @CollectionTable(name = "JOB_CONTENT",
            joinColumns = @JoinColumn(name = "JOB_ID"))
    @Column(name = "CONTENT_ID")
    private Set<Content> contents;

    private Company company;

    private JobStatus status;
    private String location;


}
