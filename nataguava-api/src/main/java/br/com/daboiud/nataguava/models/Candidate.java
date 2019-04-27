package br.com.daboiud.nataguava.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToMany(
            mappedBy = "candidate",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<ResultCandidateJob> resultCandidateJob;

    private String urlRepository;

    @ManyToMany(mappedBy = "candidates")
    @JsonIgnore
    private Set<Job> jobs;

    public Candidate() { }
}
