import { Items } from './Items';

class Cart {
    constructor(
        public items: Items[] = [],
        public total: number = 0
    ) {}

    getItems(): Items[] {
        return this.items;
    }
    
    getTotal(): number {
        return this.items.reduce((total, item) => total + item.amount, 0);
    }
}
