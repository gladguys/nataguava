package br.com.daboiud.nataguava.models.dtos;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.ResultCandidateJob;
import lombok.Data;

@Data
public class ResultCandidateJobDto {

    private Long id;
    private Long jobId;
    private Long candidateId;
    private String candidateName;
    private String urlRepo;
    private String email;
    private int result;
    private int numQuestions;

    public ResultCandidateJob toObject() {
        ResultCandidateJob resultCandidateJob = new ResultCandidateJob();
        Job job = new Job();
        job.setId(this.jobId);
        Candidate candidate = new Candidate();
        candidate.setId(this.candidateId);

        resultCandidateJob.setJob(job);
        resultCandidateJob.setCandidate(candidate);
        resultCandidateJob.setResult(this.result);

        return resultCandidateJob;
    }
}
