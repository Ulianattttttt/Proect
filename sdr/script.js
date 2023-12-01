let menu = document.querySelector(".menu");

if(menu){
menu.addEventListener("click", () => {
    if(menu.classList.contains("pushed")) {
 menu.classList.remove("pushed");
 
    }else
    menu.classList.add("pushed");
    }
);
}