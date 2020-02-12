import { Product } from './product';

export class LineItem {
    product: Product;
    quantity: number;

    get amount() {
        return this.product.unit_price * this.quantity * ((100-this.product.discount)/100);
    }
}
