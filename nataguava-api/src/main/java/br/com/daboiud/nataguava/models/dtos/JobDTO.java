package br.com.daboiud.nataguava.models.dtos;

import br.com.daboiud.nataguava.models.Job;
import lombok.Data;

@Data
public class JobDTO {

	private Long id;
	private String title;
	private String location;

	public JobDTO() {}

	public Job toObject() {
		Job job = new Job();
		job.setId(this.id);
		job.setTitle(this.title);
		job.setLocation(this.location);

		return job;
	}
}
