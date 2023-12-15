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


function addNewItem(){
let men = document.getElementById("men");

if(men){
    let inner = men.innerHTML;
    inner += div
}
}

function sendForm(event){
    let error=true;
    let adress = event.target[6].value;
    if(adress.lenght < 10){
        error.adress="Ваш адрес слишком короткий";
        let addressField = document.getElementById("addres-error")
        addressField.innerHTML= error.adress;
        addressField.previousElementSibling.classList.add("error");
    }
    else{
        error.adress=null;
        let addressField = document.getElementById("addres-error")
        addressField.innerHTML= '';
        addressField.previousElementSibling.classList.remove("error");
    }

    let name = event.target[0].value;
    let nameTemplate = /^[a-яА-Я\s]*[a-яА-Я]$/g;
    if(!nameTemplate.test(name)){
        error.name="Введите корректное имя"
    }

    return false
}