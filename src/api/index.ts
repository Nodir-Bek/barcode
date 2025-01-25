import { Product, User } from "@/types";

const API_URL = "http://localhost:3001";
export const login = async (username:string, password:string):Promise<User | undefined > => {
    const response = await fetch(`${API_URL}/users?username=${username}&password=${password}`);
    const users:User[] = await response.json();
    return users[0];
};

export const getUsers = async ():Promise<User[]> => {
    const response = await fetch(`${API_URL}/users`);
    const users:User[] = await response.json();
    return users;
};

export const getProducts = async ():Promise<Product[]> => {
    const response = await fetch(`${API_URL}/products`);
    const products:Product[] = await response.json();
    return products;
};

export const addProduct = async (product:Omit<Product, 'id'>):Promise<Product> => {
const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
});
const newProduct:Product = await response.json();
return newProduct;
};

export const updateProduct = async (product:Product):Promise<Product> => {
    const response = await fetch(`${API_URL}/products/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    const updatedProduct:Product = await response.json();
    return updatedProduct;
};

export const deleteProduct = async (id:number):Promise<void> => {
    await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
    });
}