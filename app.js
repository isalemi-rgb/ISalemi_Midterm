let name = document.getElementById("name");


function price(){
    let age = document.getElementById("age").value;
    if (age <= 3 && age >= 0){
        return "Free"
    }else if(age >= 4 && age <= 12){
        return "$10"
    }else if(age >= 13 && age <= 64){
        return "$20"
    }else if(age >= 65){
        return "$12"
    }else if(age <= 0){
        return "invalid"
    }
    return price
}


document.getElementById("btn").addEventListener("click", () => {
    price();
    document.getElementById("result").innerHTML = "Hello, " + name.value + "! Your ticket price is " + price();
});