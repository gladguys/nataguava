package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private String id;

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

    public Candidate() { }

}
