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

    @ElementCollection(targetClass = Content.class)
    @CollectionTable(name = "JOB_CONTENT",
            joinColumns = @JoinColumn(name = "JOB_ID"))
    @Column(name = "CONTENT_ID")
    private Set<Content> contents;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "job_person",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "person_id")
    )
    private Set<Person> persons;

    @Enumerated(value = EnumType.STRING)
    private JobStatus status;

    private String location;

}
