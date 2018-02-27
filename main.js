
 var signs = document.querySelectorAll("input[value]");
 var result = document.querySelector("input#result");

for( var i=0; i<signs.length; i++){
    var sign = signs[i];
   sign.addEventListener("click", fun1);
}

function fun1(){
    var num1 = document.querySelector("input#num1");
    var num2 = document.querySelector("input#num2");
    num1 = num1.value;
    num2 = num2.value;
    console.log(num1);
}
