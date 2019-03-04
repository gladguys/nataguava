import { User } from './user.model';
export class Candidate {
    public id: number;
    public user: User;
    public urlRepository: string;
    public name: string;
}