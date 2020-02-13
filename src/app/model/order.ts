import { LineItem } from './line-item';

export class Order {
    id: number;
    lineItems: Array<LineItem>;
    orderDate: string = new Date().toISOString();
    status: string = 'PENDING';
    customerId: number;
}
