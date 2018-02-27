
 var signs = document.querySelectorAll("input[value]");
 var result = document.querySelector("input#result");

for( var i=0; i<signs.length; i++){
    var sign = signs[i];
   sign.addEventListener("click", fun1);
}

function fun1(e){
    var num1 = document.querySelector("input#num1").value;
    var num2 = document.querySelector("input#num2").value;

    if(num1 == "" || num2 == "") 
        result.value = "There is no number";
    else{
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (this.value){
                case "+" :
                    console.log(num1 + num2);
                break;
                }
    }
}
