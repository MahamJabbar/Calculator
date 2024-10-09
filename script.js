let inputBox = document.getElementById("mj-input");
let button = document.querySelectorAll("button");
let string = "";
let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputBox.value = string;         
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            inputBox.value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }
        else{
        string += e.target.innerHTML;
        inputBox.value = string;
    }
    })
})
