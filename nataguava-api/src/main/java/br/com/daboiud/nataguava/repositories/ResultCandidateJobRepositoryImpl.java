package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;
import org.hibernate.SQLQuery;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Component
public class ResultCandidateJobRepositoryImpl implements ResultCandidateJobRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

   /* @Override
    public List<ResultCandidateJob> findByJobId(Long jobId) {

        StringBuilder sql = new StringBuilder();
        sql.append(" SELECT res.id as id, j.id as jobId, cand.id as candidateId, cand.name as candidateName, res.result as result ");
        sql.append(" FROM result_candidate_job res ");
        sql.append(" INNER JOIN job j on j.id = res.job_id ");
        sql.append(" INNER JOIN candidate cand on cand.id = res.candidate_id ");
        sql.append(" WHERE j.id = "+ jobId);



        return null;

    }*/
}
