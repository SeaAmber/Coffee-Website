import { products } from "./data/products";

//Dom Layer
const productBtn = document.getElementById("productBtn");
const list = document.getElementById("productList")!;


productBtn?.addEventListener("click", () => {
    list.innerHTML = products
    .map(product => {
     return   `
     <div>
        <div>
        <img src="${product.image}" alt="${product.name}"w-full class="w-60 h-60 object-cover">
        </div>

        <div>
        <h3 class=" text-2xl font-semibold mb-3">${product.name}</h3>
        <p class="font-semibold text-2xl">$${product.price}</p>
        </div>
       
        </div>
        
        `;
})
.join("");
})
