package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class StatusCandidateVacancy {

    private Candidate candidate;
    private Vacancy vacancy;
    private SituationCanditadeVacancy situation;
}
