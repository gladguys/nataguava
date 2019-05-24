package br.com.daboiud.nataguava.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.daboiud.nataguava.models.Content;
import br.com.daboiud.nataguava.models.dtos.JobDTO;

public class JobRepositoryImpl implements JobRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

	@Override
	public List<JobDTO> findAllByTags(List<Content> contents) {
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT j.id, j.title, j.location FROM job j");
		sql.append("INNER JOIN content c ON (c.job_id = j.id)");
		sql.append("WHERE c.id IN");
		sql.append("(");
		contents.forEach(c -> {
			sql.append(c.getContentTag().getId()).append(",");
		});
		sql.append(sql.substring(0, sql.length() - 1));
		sql.append(")");

		List<JobDTO> resultList = em.createNativeQuery(sql.toString(), JobDTO.class)
                .getResultList();

		return resultList;
	}

}
