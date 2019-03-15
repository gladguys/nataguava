package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
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

    private List<Job> subscribedJobs;

    public Candidate() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<ResultCandidateJob> getResultCandidateJob() {
        return resultCandidateJob;
    }

    public void setResultCandidateJob(List<ResultCandidateJob> resultCandidateJob) {
        this.resultCandidateJob = resultCandidateJob;
    }

    public String getUrlRepository() {
        return urlRepository;
    }

    public void setUrlRepository(String urlRepository) {
        this.urlRepository = urlRepository;
    }
}
