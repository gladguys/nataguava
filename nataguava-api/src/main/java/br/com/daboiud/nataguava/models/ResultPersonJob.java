package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class ResultPersonJob {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Job job;

	private Person person;

}
