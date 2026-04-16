const inptUserName = document.querySelector('#form__name');

inptUserName.addEventListener('input', () => {
    let value = inptUserName.value;
    let result = '';
    for(let letter of value){
        if(!(letter >= "0" && letter <= "9")){
            result += letter;
        }
    }
    inptUserName.value = result;
});