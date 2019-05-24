package br.com.daboiud.nataguava.repositories;

import java.util.List;

import br.com.daboiud.nataguava.models.Content;
import br.com.daboiud.nataguava.models.dtos.JobDTO;

public interface JobRepositoryCustom {

	List<JobDTO> findAllByTags(List<Content> contents);
}
