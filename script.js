let input = document.getElementById("cal-input");

let string = "";
let buttons = document.querySelectorAll('.button');
let arr = Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        let inner = event.target.innerHTML;
        if(inner == '='){
            string = eval(string);
            input.value = string
        }else if(inner == 'AC'){
            string = "";
            input.value = string;
        }else if(inner == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }else{
            string = string + event.target.innerHTML;
            input.value = string;
            
        }
        console.log(event.target);
    })
})

const container = document.querySelector('.container');
const night = document.getElementById("night");

let isNightMode = true;

night.addEventListener('click', (event)=>{

    if(isNightMode){
        console.log("hello");
        container.style.backgroundColor = "black";
        night.style.backgroundColor = "white";
        night.style.color = "black";
        night.innerHTML = "Day Mode";
        // night.style.transition = "3s ease-in";
        night.style.transform = "scale(1.1)"
        setTimeout(() => {
            night.style.transform = "scale(1)"
        }, 150);
    }else{
        container.style.backgroundColor = "rgb(181, 245, 245)";
        night.style.backgroundColor = "black";
        night.style.color = "white";
        night.style.transform = "scale(1.1)"
        setTimeout(() => {
            night.style.transform = "scale(1)"
        }, 150);
    }
    isNightMode = !isNightMode;
})



// const ac = document.getElementById("ac");
// const mod = document.getElementById("mod");
// const bcspace = document.getElementById("backspace");
// const divide = document.getElementById("divide");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const multiply = document.getElementById("multiply");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const minus = document.getElementById("minus");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const plus = document.getElementById("addition");
// const dblZero = document.getElementById("dbl-zero");
// const zero = document.getElementById("zero");
// const dot = document.getElementById("dot");
// const equal = document.getElementById("equal");