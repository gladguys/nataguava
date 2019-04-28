import { ItemQuestion } from "./item-question.model";

export class Question {
    public id: number;
    public title: string;
    public itens: Array<ItemQuestion>;
}