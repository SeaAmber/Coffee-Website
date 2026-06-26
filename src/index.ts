import { products } from "./data/products";

const viewButton = document.getElementById("viewBtn") as HTMLElement;
 const menu = document.getElementById("menubtn") as HTMLElement;
 const navigationMenu = document.getElementById("nav-menu") as HTMLElement;


viewButton.addEventListener("click", () => {
 location.href = 'products.html'
})

menu.addEventListener("click", () => {
 navigationMenu.classList.toggle("hidden");

 if(navigationMenu.classList.contains("hidden")) {
    menu.textContent = '☰';
 }
    else{
        menu.textContent = '✖';
    }
 }
)