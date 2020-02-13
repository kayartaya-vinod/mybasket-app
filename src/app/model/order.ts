import { LineItem } from './line-item';
import { Customer } from './customer';

export class Order {
    id: number;
    lineItems: Array<LineItem>;
    orderDate: string = new Date().toISOString();
    status: string = 'PENDING';
    customerId: number;
}
