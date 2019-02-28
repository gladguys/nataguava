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

    private int numberOfBestCandidates;


    @OneToMany
    private Set<Content> contents;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })

    private ResultPersonJob resultPersonJob;

    @Enumerated(value = EnumType.STRING)
    private JobStatus status;

    private String location;

}
