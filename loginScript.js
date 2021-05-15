const submitBtn = document.querySelector("#submit");
const passF = document.querySelector("#pwd");
const nameF = document.querySelector("#name");

submitBtn.addEventListener('click', () => {
    const pass = passF.value
    const username = nameF.value

    if(!(username && pass)) {
        alert(`Name or Password Missing!!!`)
    }
    else {
        if(!(pass[0] == pass[0].toUpperCase())){
            alert(`Password must start with Uppercase letter!!!`)
        }
    }

})


