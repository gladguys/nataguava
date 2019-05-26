package br.com.daboiud.nataguava.models;

import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "result_candidate_job")
public class ResultCandidateJob {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	@ManyToOne
	private Job job;

	@ManyToOne(fetch = FetchType.EAGER)
	private Candidate candidate;

	private int result;

	public ResultCandidateJobDto toDTO() {
		ResultCandidateJobDto dto = new ResultCandidateJobDto();
		dto.setId(this.id);
		dto.setCandidateId(this.candidate.getId());
		dto.setJobId(this.job.getId());
		dto.setResult(this.result);
		dto.setCandidateName(this.candidate.getName());
		dto.setNumQuestions(this.job.getTotalQuestions());

		return dto;
	}
}
