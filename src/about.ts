const menu = document.getElementById("menubtn") as HTMLElement;
 const navigationMenu = document.getElementById("nav-menu") as HTMLElement;

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