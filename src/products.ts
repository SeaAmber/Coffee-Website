import { products } from "./data/products";

//Dom Layer
const productBtn = document.getElementById("productBtn");
const list = document.getElementById("productList");



//Render Layer 
function renderProducts(products: string[]) {
    list!.innerHTML = products.map(p => `<div>${p}</div>`).join("");
}


//Event Layer
productBtn?.addEventListener("click", () => {
    renderProducts(products);
})