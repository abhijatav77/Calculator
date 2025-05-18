const input = document.getElementById("cal-input");
const buttons = document.querySelectorAll('button');

let string = '';
const arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }else if(event.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }else if(event.target.innerHTML == "DEL"){
            string = string.substring(0, string.length - 1);
            input.value = string;

        }else{

            string += event.target.innerHTML;
            input.value = string;
        }
    })
})
console.log("GitHub");

// I am fixing some bug
console.log("Bug Fixed");