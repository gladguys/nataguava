package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
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
    private UserCompany userCompany;

    @OneToMany(
            mappedBy = "job",
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    private List<ResultCandidateJob> resultsCandidateJob;

    @Enumerated(value = EnumType.STRING)
    private JobStatus status;

    private String location;

    @ManyToMany(mappedBy = "jobs")
    private List<Candidate> candidates;

    private Date deadline;

}
