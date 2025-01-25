export interface User {
    id: number;
    username: string;
    password: string;
    role: 'admin' | 'user';
}

export interface Product {
    index?: number;
    id: string;
    name: string;
    barcode: string;
    price: number;
}