package br.com.daboiud.nataguava.repositories;

public interface JobRepositoryCustom {

        int qntJobsByCandidate(Long candidateId);
        void deleteSubscriptionJobByCandidate(Long jobId, Long candidateId);
}
