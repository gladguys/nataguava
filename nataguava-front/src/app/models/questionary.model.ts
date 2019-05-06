import { Job } from 'src/app/models/job.model';
import { Candidate } from 'src/app/models/candidate.model';
import { Question } from './question.model';
export class Questionary {
    public id: number;
    public candidate: Candidate;
    public job: Job;
    public questions: Array<Question>;
    public scores: number;
}