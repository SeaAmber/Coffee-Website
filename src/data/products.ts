
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
        image: "assets/latte.jpg"
       },

 {
        id: 2,
        name: "coldbrew",
        price: 5.00,
        image: "assets/coldbrew.jpg"
       },


       {
        id: 3,
        name: "coffee",
        price: 3.99,
        image: "assets/coffee.jpg"
       },

{
        id: 4,
        name: "cappucino",
        price: 6.00,
        image: "assets/cappuccino.jpg"
       },



 {
        id: 5,
        name: "toasted marshmallow drink",
        price: 6.00,
        image: "assets/toastedmarshmallow.jpg"
       },


 {
        id: 6,
        name: "cortado",
        price: 7.00,
        image: "assets/cortado.jpg"
       },

{
        id: 7,
        name: "dark mocha velvet",
        price: 7.00,
        image: "assets/darkmochavelvet.jpg"
       },



       {
        id: 8,
        name: "white mocha velvet",
        price: 7.00,
        image: "assets/whitemochavelvet.jpg"
       },


{
        id: 9,
        name: "hot chocolate",
        price: 5.00,
        image: "assets/hotchocolate.jpg"
       }


];


