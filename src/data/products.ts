
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}


export const products: Product[] = [
       {
        id: 1,
        name: "latte",
        price: 4.99,
        image: "src/assets/latte.jpg"
       },

 {
        id: 2,
        name: "coldbrew",
        price: 4.99,
        image: "src/assets/coldbrew.jpg"
       },


       {
        id: 3,
        name: "coffee",
        price: 4.99,
        image: "src/assets/coffee.jpg"
       },
];


