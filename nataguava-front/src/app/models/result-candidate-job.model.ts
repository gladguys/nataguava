import { Candidate } from './candidate.model';
import { Job } from './job.model';
export class ResultCandidateJob {
    public id: number;
    public job: Job;
    public candidate: Candidate;
    public result: number;
}