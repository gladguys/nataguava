import { UserCompany } from './user-company.model';
import { ResultCandidateJob } from './result-candidate-job.model';
import { Content } from './content.model';

export class Job {
    public id: string;
    public title: string;
    public description: string;
    public numberOfBestCandidates: number;
    public contents: Array<Content>;
    public userCompany: UserCompany;
    public status: string;
    public location: string;
    public resultCandidateJob: Array<ResultCandidateJob>;
}