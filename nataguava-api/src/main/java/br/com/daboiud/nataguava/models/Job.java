package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Job {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String title;

    @Lob
    @Column(columnDefinition = "text")
    private String description;

    private int numberOfBestCandidates;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="job_id", referencedColumnName="id")
    private List<Content> contents;

    @ManyToOne(fetch = FetchType.EAGER)
    private UserCompany userCompany;

    @Enumerated(value = EnumType.STRING)
    private JobStatus status;

    private String location;

    @ManyToMany( targetEntity = Candidate.class, cascade = CascadeType.ALL)
    @JoinTable(name = "candidate_jobs",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "candidate_id")
    )
    private List<Candidate> candidates;

    private Date deadline;

    public void addCandidate(Candidate candidade) {
        this.candidates.add(candidade);
    }

    @Override
    public String toString() { return "";}

}
