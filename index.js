let input =document.getElementById("text");
let c_f=document.getElementById("c-f");
let f_c=document.getElementById("f-c");
let button =document.getElementById("submit");
let answer = document.getElementById("answer");




button.onclick = function(){
   
     if(c_f.checked){
        let celsius = Number(input.value);
        let fahrenheit = (celsius * 9/5) + 32;
        answer.textContent =`${fahrenheit} °F`;
    }
    else if(f_c.checked){
        let fahrenheit = Number( input.value);
        let celsius = (fahrenheit - 32) * 5/9;
        answer.textContent = `${celsius} °C`;
    }
    else{
        answer.textContent = "Please select a conversion type";
    }
}

