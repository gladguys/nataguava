package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "result_candidate_job")
public class ResultCandidateJob {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	@ManyToOne(fetch = FetchType.EAGER)
	private Job job;

	@ManyToOne(fetch = FetchType.EAGER)
	private Candidate candidate;

	private int result;

}
