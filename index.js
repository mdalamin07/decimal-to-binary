var number = $("#number1");
var result = $("#result");
var button = $("#button");

function binary(e){
    e.preventDefault();
    
    var num = number.val();
    if(num === ""){
        alert("Plase Enter a Number");
    }else if (num < 0){
        alert("Plase Enter a Positive Number")
     }else{
        result.css("visibility","visible")
    }

    var binaryNumber = parseInt(num).toString(2);

    result.text(binaryNumber);
};
    button.click(binary);