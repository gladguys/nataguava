package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "result_person_job")
public class ResultPersonJob {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	@ManyToOne(fetch = FetchType.EAGER)
	private Job job;

	@ManyToOne(fetch = FetchType.EAGER)
	private Person person;

}
