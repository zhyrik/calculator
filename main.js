
  var signs = document.querySelectorAll("input[value]");
 var result = document.querySelector("input#result");

for( var i=0; i<signs.length; i++){
    var sign = signs[i];
   sign.addEventListener("click", calculator);
}

function calculator(e){
    var num1 = document.querySelector("input#num1").value;
    var num2 = document.querySelector("input#num2").value;

    if(num1 == "" || num2 == "") 
        result.value = "There is no number";
    else{
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (this.value){
                case "+" :
                    result.value = num1 + num2;
                break;
                case "-" :
                    result.value = num1 - num2;
                break;
                case "*" :
                    result.value = num1 * num2;
                break;
                case "/" :
                    if(num2 == 0)
                        result.value = "Dont divide by 0";
                    else
                        result.value = num1 / num2;
                break;
                }
    }
}