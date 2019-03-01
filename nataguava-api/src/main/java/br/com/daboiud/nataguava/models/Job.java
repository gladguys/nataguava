package br.com.daboiud.nataguava.models;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String title;

    private String description;

    private int numberOfBestCandidates;


    @Transient
    private List<Content> contents;

    @ManyToOne(fetch = FetchType.EAGER)
    private Company company;

    @OneToMany(
            mappedBy = "job",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<ResultPersonJob> resultPersonJob;

    @Enumerated(value = EnumType.STRING)
    private JobStatus status;

    private String location;

}
