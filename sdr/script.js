



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

    let date = event.target[1].value;
    let pol = event.target[2].value;
    let phone = event.target[3].value;
    let email = event.target[4].value;
    let git = event.target[5].value;

    let errors = Object.keys(error)

    for(key in error){
        errors++;
    }
    if(errors){
        return false;
    }else{
        let list = document.getElementsByClassName("card-list")[0];

        let now = new Date;
        
        list.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
            <img src="ava.png" alt="" />
            <div class="card-name">${name}</div>
            <div class="card-age">Возраст: ${age}</div>
            <button type="button">info</button>
        </div>"`);
        
    }


    return false;
}