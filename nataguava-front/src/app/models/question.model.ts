import { ItemQuestion } from "./item-question.model";
import { ContentTag } from "./content-tag.model";

export class Question {
    public id: number;
    public textQuestion: string;
    public tag: ContentTag;
    public itens: Array<ItemQuestion>;
    public itemChosen: ItemQuestion;
}