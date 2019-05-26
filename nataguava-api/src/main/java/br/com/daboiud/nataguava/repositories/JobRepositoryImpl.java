package br.com.daboiud.nataguava.repositories;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigDecimal;
import java.math.BigInteger;

public class JobRepositoryImpl implements JobRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public int qntJobsByCandidate(Long candidateId) {

        StringBuilder sql = new StringBuilder();
        sql.append("SELECT count(*) FROM candidate_jobs ");
        sql.append(" where candidate_id = " + candidateId);

        BigInteger result = (BigInteger) em.createNativeQuery(sql.toString()).getSingleResult();
        return result.intValue();
    }

    public void deleteSubscriptionJobByCandidate(Long jobId, Long candidateId) {

        StringBuilder sql = new StringBuilder();
        sql.append("DELETE FROM candidate_jobs ");
        sql.append(" where job_id = " + jobId + " and candidate_id = " + candidateId);

        em.createNativeQuery(sql.toString()).executeUpdate();

    }
}
