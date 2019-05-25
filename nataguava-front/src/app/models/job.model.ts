import { UserCompany } from './user-company.model';
import { ResultCandidateJob } from './result-candidate-job.model';
import { Content } from './content.model';

export class Job {
    public id: number;
    public title: string;
    public description: string;
    public numberOfBestCandidates: number;
    public deadline: Date;
    public contents: Content[];
    public userCompany: UserCompany;
    public status: string;
    public location: string;
}