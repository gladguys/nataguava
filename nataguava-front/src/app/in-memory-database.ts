import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
   
    createDb() {
    
        const categories: Category[] = [
            {id: 1, name: "Lazer", description: "Pagamentos de Contas da Casa"},
            {id: 2, name: "Comida", description: "Pagamentos de Contas Restaurante"},
            {id: 4, name: "Lazer", description: "Pagamentos de Contas do Parque"},
            {id: 5, name: "Lazer", description: "Pagamentos de Contas dos Estadios"}
        ];
    
        return {categories}
    }
}