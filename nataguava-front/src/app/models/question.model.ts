import { ItemQuestion } from "./item-question.model";

export class Question {
    public id: number;
    public textQuestion: string;
    public itens: Array<ItemQuestion>;
}