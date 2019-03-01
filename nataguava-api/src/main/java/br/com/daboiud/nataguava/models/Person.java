package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private String id;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private ProfileEnum profileEnum;

    @OneToMany(
            mappedBy = "person",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private Set<Questionary> questionaries;

    @ManyToOne(fetch = FetchType.EAGER)
    private Company company;

    @OneToMany(
            mappedBy = "person",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<ResultPersonJob> resultPersonJob;

    public Person() { }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ProfileEnum getProfileEnum() {
        return profileEnum;
    }

    public void setProfileEnum(ProfileEnum profileEnum) {
        this.profileEnum = profileEnum;
    }

    public Set<Questionary> getQuestionaries() {
        return questionaries;
    }

    public void setQuestionaries(Set<Questionary> questionaries) {
        this.questionaries = questionaries;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public List<ResultPersonJob> getResultPersonJob() {
        return resultPersonJob;
    }

    public void setResultPersonJob(List<ResultPersonJob> resultPersonJob) {
        this.resultPersonJob = resultPersonJob;
    }
}
