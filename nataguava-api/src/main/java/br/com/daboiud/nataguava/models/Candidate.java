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

    private String name;

    private String urlRepository;

    @ManyToMany(mappedBy = "candidates")
    @JsonIgnore
    private Set<Job> jobs;

    public Candidate() { }

    public void addJob(Job job) {
        this.jobs.add(job);
    }
}
