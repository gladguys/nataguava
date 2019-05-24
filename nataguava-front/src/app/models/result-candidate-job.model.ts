import { Candidate } from './candidate.model';
import { Job } from './job.model';
export class ResultCandidateJob {
    public id: number;
    public jobId: number;
    public candidateId: number;
    public result: number;
}