import { products } from "./data/products";

const viewButton = document.getElementById("viewBtn") as HTMLElement;

viewButton.addEventListener("click", () => {
 location.href = 'products.html'
})